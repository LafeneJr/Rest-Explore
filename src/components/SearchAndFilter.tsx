import { useDeferredValue } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";


type Props = {
  query: string;
  onQuery: (v: string) => void;
  region: string;
  onRegion: (v: string) => void;
};

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antartica"]


export const SearchAndFilter = ({ query, onQuery, region, onRegion}: Props) => {

    const deferred = useDeferredValue(query)

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        
        <div className="relative flex-1">

            <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search by name..."
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-10 py-2 outline-none focus:ring-2 ring-slate-400" />

            <FaSearch className="absolute left-3 top-2.5 size-5 opacity-70 pointer-events-none" />
            {deferred && <span className="sr-only">
                            {deferred}
                        </span>}
        </div>

        <div className="relative">

            <select
            value={region}
            onChange={(e) => onRegion(e.target.value)}
            className="appearance-none pr-10 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 ring-slate-400">

                <option value="">All Regions</option>
                {regions.map((r) =>
                <option key={r}
                value={r}>
                    {r}
                </option>
                )}
            </select>

            <FaFilter className="absolute right-3 top-2.5 size-5 opacity-70 pointer-events-none" />
        </div>
    </div>
  )
}
