# Fullstack Starter - React, Hono & Prisma

Este es un proyecto base (starter) configurado como monorepo para desarrollo fullstack.

## Pasos Iniciales

Para comenzar con el proyecto, es fundamental realizar las siguientes configuraciones de nombres para asegurar el correcto funcionamiento de las dependencias internas.

### 1. Configurar el nombre del proyecto (Package Slug)

El nombre que definas en el `package.json` raíz servirá como prefijo para los paquetes internos.

1. Abre el archivo `package.json` en la **raíz** del proyecto.
2. Edita el campo `"name"` con el nombre de tu proyecto.
   - _Este nombre será el "slug" utilizado para instalar los paquetes internos dentro de las aplicaciones (`apps`)._

### 2. Configurar el paquete de Base de Datos (`packages/db`)

El paquete de base de datos debe seguir la convención del monorepo.

1. Abre `packages/db/package.json`.
2. Actualiza el campo `"name"` siguiendo este formato: `@<nombre-de-tu-proyecto>/db`.
   - _Ejemplo: Si en la raíz usaste `"name": "mi-app"`, aquí deberías usar `"name": "@mi-app/db"`._

---

## Configuración de la Base de Datos

Para inicializar la base de datos con Prisma, sigue estos pasos:

1. **Variables de Entorno**:
   En la raíz de `packages/db`, crea un archivo `.env` utilizando `.env.example` como plantilla:

   ```bash
   # Dentro de packages/db
   cp .env.example .env
   ```

   Configura tu `DATABASE_URL` dentro del nuevo archivo `.env`.

2. **Pull de la Base de Datos**:
   Si tienes una base de datos existente, trae el esquema actual:

   ```bash
   bun run db:pull
   ```

3. **Generar Cliente**:
   Genera el cliente de Prisma para que esté disponible en todo el monorepo:
   ```bash
   bun run db:generate
   ```

---

## Instalación y Dependencias

Una vez configurados los nombres y la base de datos, instala todas las dependencias desde la raíz del proyecto:

```bash
bun install
```

## Ejecución del Proyecto

Para iniciar el entorno de desarrollo (API y Web simultáneamente):

```bash
bun run dev
```
