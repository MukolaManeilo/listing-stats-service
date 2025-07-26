# listing-stats-service

## Запуск через Docker Compose

1. Скопіюйте змінні оточення:
   ```
   cp .env.example .env
   ```
   За потреби відредагуйте `.env`.

2. Запустіть сервіси:
   ```
   docker compose up -d
   ```

## Запуск вручну (локально)

1. Встановіть залежності:
   ```
   npm install
   ```
2. Скопіюйте змінні оточення:
   ```
   cp .env.example .env
   ```
   Відредагуйте `.env` під ваше оточення (PostgreSQL має бути запущений).
3. Ініціалізуйте базу даних:
   ```
   npm run migrate
   ```
4. Запустіть сервер:
   ```
   npm start
   ```
   або для розробки:
   ```
   npm run dev
   ```

## Основний функціонал

- **/listing-views** — фіксація та отримання кількості переглядів оголошення.
- **/phone-views** — фіксація та отримання кількості показів телефону.
- **/statistics** — отримання агрегованої статистики по оголошеннях.

## Тестування через curl

### Додавання даних (POST)

#### Додати перегляд оголошення
```sh
curl -X POST http://localhost:3000/listing-views \
  -H "Content-Type: application/json" \
  -d '{"autoId": "12345"}'
```

#### Додати показ телефону
```sh
curl -X POST http://localhost:3000/phone-views \
  -H "Content-Type: application/json" \
  -d '{"autoId": "12345"}'
```

### Отримання даних (GET)

#### Перевірка здоров'я сервісу
```sh
curl http://localhost:3000/health
```

#### Отримати кількість переглядів оголошення
```sh
curl http://localhost:3000/listing-views/12345
```

#### Отримати кількість показів телефону
```sh
curl http://localhost:3000/phone-views/12345
```

#### Отримати агреговану статистику по оголошенню
```sh
curl http://localhost:3000/statistics/12345
```

#### Отримати топ оголошень за переглядами
```sh
curl "http://localhost:3000/statistics/top?limit=5&orderBy=listing_views"
```

#### Отримати всі статистики (з пагінацією)
```sh
curl "http://localhost:3000/statistics?limit=10&offset=0"
```
