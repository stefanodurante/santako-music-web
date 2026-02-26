import { useState, useMemo, useEffect } from "react";
import type { ContentNode } from "../../types/content";

type PersonaNode = Extract<ContentNode, { type: "PERSONA" }>;

type Props = {
  personas: PersonaNode[];
};

const ROLES = [
  { key: "all", label: "Todos" },
  { key: "dj", label: "DJ" },
  { key: "banda", label: "Bandas" },
  { key: "duo", label: "Dúos" },
  { key: "cantautor", label: "Cantautores" },
  { key: "tributo", label: "Tributos" },
];

function useGenres(personas: PersonaNode[]) {
  return useMemo(() => {
    const set = new Set<string>();
    personas.forEach((p) => p.data.genres?.forEach((g) => set.add(g)));
    return Array.from(set).sort();
  }, [personas]);
}

export default function PersonasGrid({ personas }: Props) {
  const [activeRole, setActiveRole] = useState("all");
  const [activeGenre, setActiveGenre] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const genres = useGenres(personas);

  useEffect(() => {
    const closeOnNavOpen = () => setFiltersOpen(false);
    document.addEventListener("nav:open", closeOnNavOpen);
    return () => document.removeEventListener("nav:open", closeOnNavOpen);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFiltersOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const openFilters = () => {
    setFiltersOpen(true);
    document.dispatchEvent(new CustomEvent("filters:open"));
  };

  const closeFilters = () => {
    setFiltersOpen(false);
    document.body.style.overflow = "";
  };

  const toggleFilters = () => {
    if (filtersOpen) {
      closeFilters();
    } else {
      openFilters();
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const filtered = personas.filter((p) => {
    const roles = p.data.roles?.length ? p.data.roles : [p.data.label];
    const matchesRole =
      activeRole === "all"
        ? true
        : roles.map((r) => r.toLowerCase()).includes(activeRole);

    const matchesGenre =
      activeGenre === "all"
        ? true
        : (p.data.genres ?? []).includes(activeGenre);

    const matchesSearch = p.data.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesRole && matchesGenre && matchesSearch;
  });


  const hasActiveFilters = activeRole !== "all" || activeGenre !== "all" || search !== "";

  const clearFilters = () => {
    setActiveRole("all");
    setActiveGenre("all");
    setSearch("");
  };

  const filtersContent = (
    <div className="py-6">
      <div className={genres.length > 0 ? "mb-6" : "mb-0"}>
        <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">Rol</span>
        <div className="flex flex-wrap gap-3">
          {ROLES.map((role) => (
            <button
              key={role.key}
              onClick={() => setActiveRole(role.key)}
              className={`text-sm uppercase tracking-widest px-4 py-2 border rounded-full transition
                ${activeRole === role.key ? "bg-black text-white" : "border-black/20 hover:border-black"}`}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>
      {genres.length > 0 && (
        <div>
          <span className="text-xs uppercase tracking-widest opacity-60 block mb-3">Género</span>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveGenre("all")}
              className={`text-sm uppercase tracking-widest px-4 py-2 border rounded-full transition
                ${activeGenre === "all" ? "bg-black text-white" : "border-black/20 hover:border-black"}`}
            >
              Todos
            </button>
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className={`text-sm uppercase tracking-widest px-4 py-2 border rounded-full transition
                  ${activeGenre === g ? "bg-black text-white" : "border-black/20 hover:border-black"}`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* BUSCADOR + BOTÓN FILTROS */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 max-w-md">
          <input
            type="search"
            placeholder="Buscar por nombre…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black rounded"
          />
        </div>
        <button
          onClick={toggleFilters}
          className={`flex items-center gap-2 text-sm uppercase tracking-widest px-5 py-2.5 border rounded-full transition shrink-0
            ${filtersOpen ? "bg-black text-white" : "border-black/20 hover:border-black"}`}
          aria-expanded={filtersOpen}
          aria-controls="personas-filters"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filtros
          {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-current opacity-80" />}
        </button>
      </div>

      {/* FILTROS: DESKTOP - inline collapse, no space when closed */}
      {filtersOpen && (
        <div
          id="personas-filters"
          className="hidden md:block mb-6 border border-black/10 rounded-lg"
        >
          {filtersContent}
        </div>
      )}

      {/* FILTROS: MOBILE - full screen overlay */}
      {filtersOpen && (
        <div
          className="md:hidden fixed inset-0 z-[99998] bg-[#F6F6F4] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Filtros"
        >
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <h2 className="font-heading text-xl">Filtros</h2>
            <button
              onClick={closeFilters}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition"
              aria-label="Cerrar filtros"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {filtersContent}
          </div>
          <div className="p-6 pt-4 border-t border-black/10">
            <button
              onClick={closeFilters}
              className="w-full py-4 bg-black text-white text-sm uppercase tracking-widest rounded-full font-medium hover:opacity-90 transition"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((person) => {
          const image = person.data.images?.[0];

          return (
            <a
              key={person.data.slug}
              href={`/persona/${person.data.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-200"
            >
              {image && (
                <img
                  src={image}
                  alt={person.data.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 ease-out" />

              <div className="relative h-full p-4 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-widest opacity-80">
                  {person.data.label}
                </span>

                <h2 className="font-heading text-xl leading-tight mt-1">
                  {person.data.title}
                </h2>
              </div>
            </a>
          );
        })}

        {filtered.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-24 px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="font-heading text-xl text-black/70 mb-2">
              No hay resultados
            </p>
            <p className="text-sm text-black/50 max-w-sm mb-6">
              No hemos encontrado ninguna persona con esos criterios. Prueba a ampliar los filtros o la búsqueda.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm uppercase tracking-widest px-5 py-2.5 border border-black/20 rounded-full hover:border-black hover:bg-black/5 transition"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
