# Kipsoft Test

<!-- ABOUT THE PROJECT -->
## <span id="about-the-project">About the project</span>
### <span id="built-with">Built with</span>

* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com/)

### <span id="installation">Installation</span>
```shell
npm install
ng serve # default port is 4200
```

## <span id="about-the-project">Models</span>

`Company` - model of the API response (https://entreprise.data.gouv.fr/api/sirene/v1/full_text/XXXX?per_page=5&page=1)

```ts
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
```

`Etablissement` 

```ts
export default interface Etablissement {
  id: number
  siren: string
  siret: string
  nic: string
  l1_normalisee: string
  ...
  geo_type: string
  geo_adresse: string
  geo_id: string
  geo_ligne: string
  geo_l4: string
  geo_l5: string
}
```

`SiretResponse` - model of the API response (https://entreprise.data.gouv.fr/api/sirene/v1/siret/XXXX?per_page=5&page=1)

```ts
import Etablissement from "./etablissement";

export interface SiretResponse {
  etablissement: Etablissement
}

```


## Feedback

If you have any feedbacks, contact me at [contact@bretheskevin.fr](mailto:contact@bretheskevin.fr). This is my first web app using angular. 
