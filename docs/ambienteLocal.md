---
title: Ambiente Local
---

### 1. Instalar phpmyadmin


### 2. Clonar repositorio del proyecto
```bash
git clone https://github.com/coronapl/settela.git
```

### 3. Instalar depencias de Composer
```bash
composer install
```

### 4. Crear base de datos
Crea una base de datos y recuerda el nombre.

### 5. Copiar y actualizar archivo .env
Actualizar el nombre de la base de datos. Debe coincidir con la que creaste previamente.

### 6. Realizar migraciones y popular tablas
```bash
php artisan migrate --seed
```
### 7. Correr servidor
```bash
php artisan serve
```