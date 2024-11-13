/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WidgetIdImport } from './routes/$widgetId'

// Create/Update Routes

const WidgetIdRoute = WidgetIdImport.update({
  path: '/$widgetId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$widgetId': {
      id: '/$widgetId'
      path: '/$widgetId'
      fullPath: '/$widgetId'
      preLoaderRoute: typeof WidgetIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ WidgetIdRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$widgetId"
      ]
    },
    "/$widgetId": {
      "filePath": "$widgetId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
