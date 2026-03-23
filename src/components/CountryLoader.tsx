//import { fetchCountryByCode } from "../utils/api";
//import type { LoaderFunctionArgs } from "react-router-dom";

import type { LoaderFunctionArgs } from "react-router-dom";
import { fetchCountryByCode } from "../utils/api";

export async function countryLoader({ params, request }: LoaderFunctionArgs) {
  const code = params.code?.trim();
  if (!code) {
    throw new Response("Country code is required", { status: 400 });
  }
  return fetchCountryByCode(code, request.signal);
}
