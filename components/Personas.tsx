import { personas } from "@/data/personas";
import Link from "next/link";

export default function Personas() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h4 className="font-semibold text-lg mb-2">Personas</h4>
        <p className="text-sm font-medium mt-2 text-slate-300">
          Pick a persona and chat with them about their experience.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-4">
          {personas?.map((persona) => (
            <Link
              href={`/personas/${persona.id}`}
              key={persona.id}
              className=" p-4 flex flex-col hover:bg-gray-700 cursor-pointer rounded-md  border border-slate-700 space-y-2"
            >
              <img
                className="h-14 object-cover w-14 rounded-full"
                src={persona.photo}
                alt=""
              />
              <h5 className="text-base font-semibold">{persona.names}</h5>
              <p className="text-sm line-clamp-3 leading-7 font-medium text-slate-300">
                {persona.bio}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
