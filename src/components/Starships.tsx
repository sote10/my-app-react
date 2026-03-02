import { useEffect, useState } from "react";
import StarshipCard from "./StarshipCard";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  starship_class: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  hyperdrive_rating: string;
} 

export default function Starships() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Starship[]>([]);

  async function fetchData() {
    try {
      const response = await fetch("https://swapi.dev/api/starships-Error/");
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.error(error);
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
        <div className="w-full max-w-2xl bg-red-500/10 border border-red-500 text-red-400 p-6 rounded-lg text-center">
          <p className="text-lg font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
        Naves de Star Wars
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((ship) => (
          <StarshipCard key={ship.name} ship={ship} />
        ))}
      </div>
    </div>
  );
}