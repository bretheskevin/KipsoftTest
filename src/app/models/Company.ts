import Etablissement from "./etablissement";

export default interface Company {
  total_results: number
  total_pages: number
  per_page: number
  page: string
  etablissement: Etablissement[]
  spellcheck: any
  suggestions: string[]
}
