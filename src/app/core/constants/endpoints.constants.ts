import { inject } from "@angular/core"
import { type Environment, ENVIRONMENT } from "@core/tokens/environment.token"

export const getEndpoints = () => {
  const environment = inject<Environment>(ENVIRONMENT);

  return {
    auth: {
      v1: {
        authentication: `${environment.apiBaseUrl}/v1/authentication`,
        login: `${environment.apiBaseUrl}/v1/authentication/login`,
        refreshToken: `${environment.apiBaseUrl}/v1/authentication/token/refresh`,
      },
    },

    user: {
      v1: {
        user: `${environment.apiBaseUrl}/v1/user`,
        overall: `${environment.apiBaseUrl}/v1/user/overall`,
      }
    },

    multiplayer: {
      v1: {
        
      }
    }
  }
}