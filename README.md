**Что сделано**
**1 уровень (обязательный - необходимый минимум)**
- [x] Реализованы Требования к функциональности
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем LocalStorage [LsApi](https://github.com/SifiFox/aston_react/tree/main/my-app/src/shared/api/ls-api)
- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми
- [x] Есть разделение на умные и глупые компоненты 
    Глупые: [MovieCard](https://github.com/SifiFox/aston_react/blob/main/my-app/src/shared/ui/movie-card/ui/movie-card.tsx), [MoviePoster](https://github.com/SifiFox/aston_react/blob/main/my-app/src/widgets/movie/ui/movie-poster/movie-poster.tsx)
    Умные: [RequireAuth](https://github.com/SifiFox/aston_react/blob/main/my-app/src/app/providers/router/require-auth.tsx), [AppRouter](https://github.com/SifiFox/aston_react/blob/main/my-app/src/app/providers/router/app-router.tsx)
- [x] Есть рендеринг списков [MoviesList](https://github.com/SifiFox/aston_react/blob/main/my-app/src/widgets/movies-content/ui/movies-list/ui/movies-list.tsx)
- [x] Реализована хотя бы одна форма [LoginForm](https://github.com/SifiFox/aston_react/blob/main/my-app/src/pages/ui/login-page/ui/login-form/login-form.tsx), [RegistrationForm](https://github.com/SifiFox/aston_react/blob/main/my-app/src/pages/ui/registration-page/ui/registration-form/registration-form.tsx)
- [x] Есть применение Контекст API [Theme](https://github.com/SifiFox/aston_react/tree/main/my-app/src/app/providers/theme), [Auth](https://github.com/SifiFox/aston_react/tree/main/my-app/src/app/providers/auth)
- [x] Есть применение предохранителя [MainPage](https://github.com/SifiFox/aston_react/blob/main/my-app/src/pages/ui/main-page/ui/main-page.tsx) [FavouritesPage](https://github.com/SifiFox/aston_react/blob/main/my-app/src/pages/ui/favourites-page/favourites-page.tsx)
- [x] Есть хотя бы один кастомный хук [useAuth, useDebounce, useMovies, useTheme, useWindowWidth] [Hooks](https://github.com/SifiFox/aston_react/tree/main/my-app/src/app/hooks)
- [x] Хотя бы несколько компонентов используют PropTypes  [AuthProvider](https://github.com/SifiFox/aston_react/blob/main/my-app/src/app/providers/auth/auth-provider.tsx) [MainPage](https://github.com/SifiFox/aston_react/blob/main/my-app/src/pages/ui/main-page/ui/main-page.tsx) [RequireAuth](https://github.com/SifiFox/aston_react/blob/main/my-app/src/app/providers/router/require-auth.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (debounce) [Search](https://github.com/SifiFox/aston_react/blob/main/my-app/src/widgets/search/ui/search.tsx)
- [x] Есть применение lazy + Suspense [AppRouter](https://github.com/SifiFox/aston_react/blob/main/my-app/src/app/providers/router/app-router.tsx)
- [x] Используем Modern Redux with Redux Toolkit
- [x] Используем слайсы [Slices](https://github.com/SifiFox/aston_react/tree/main/my-app/src/shared/redux/store/slices)
- [x] Используется RTK Query [MovieService](https://github.com/SifiFox/aston_react/tree/main/my-app/src/shared/redux/store/services)
- [x] Используется Transforming Responses [MovieSerive](https://github.com/SifiFox/aston_react/blob/main/my-app/src/shared/redux/store/services/movie-service.ts)

**2 уровень (необязательный)**
- [x] Использование TypeScript пример: [ApiTypes](https://github.com/SifiFox/aston_react/blob/main/my-app/src/app/api/types.ts) 
- [x] Использование Storybook [Stories](https://github.com/SifiFox/aston_react/tree/main/my-app/src/shared/stories)
- [x] Использование Firebase [FirebaseApi](https://github.com/SifiFox/aston_react/blob/main/my-app/src/shared/api/firebase-api/firebase-api.ts)
- [x] Низкая связанность клиентского кода с хранилищем [Api](https://github.com/SifiFox/aston_react/blob/main/my-app/src/shared/api/api.ts)
- [x] Реализована виртуализация списков
- [x] Настроен CI/CD [cicd.yml](https://github.com/SifiFox/aston_react/blob/main/.github/workflows/cicd.yml)
- [x] Используются мемоизированные селекторы [FavouritesSelector](https://github.com/SifiFox/aston_react/blob/main/my-app/src/shared/redux/store/selectors/favourites-selector.ts)



**Прочее**
- авторизация через google;
