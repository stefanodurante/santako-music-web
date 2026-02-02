import { useState } from "react";
import type { ContentNode, PersonaData } from "../../types/content";

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

export default function PersonasGrid({ personas }: Props) {
  const [activeRole, setActiveRole] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = personas.filter((p) => {
    // 1. FILTRO POR ROL
    const roles = p.data.roles?.length ? p.data.roles : [p.data.label];

    const matchesRole =
      activeRole === "all"
        ? true
        : roles.map((r) => r.toLowerCase()).includes(activeRole);

    // 2. FILTRO POR BÚSQUEDA
    const matchesSearch = p.data.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesRole && matchesSearch;
  });


  return (
    <>
      {/* BUSCADOR */}
      <div className="mb-8 max-w-md">
        <input
          type="search"
          placeholder="Buscar por nombre…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-black/20 px-4 py-3 text-sm outline-none focus:border-black"
        />
      </div>
      {/* FILTROS */}
      <div className="flex flex-wrap gap-3 mb-12">
        {ROLES.map((role) => (
          <button
            key={role.key}
            onClick={() => setActiveRole(role.key)}
            className={`text-sm uppercase tracking-widest px-4 py-2 border rounded-full transition
              ${
                activeRole === role.key
                  ? "bg-black text-white"
                  : "border-black/20 hover:border-black"
              }`}
          >
            {role.label}
          </button>
        ))}
      </div>

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
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

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
          <p className="mt-12 text-sm opacity-60">
            No se han encontrado personas con esos criterios.
          </p>
        )}
      </div>
    </>
  );
}
