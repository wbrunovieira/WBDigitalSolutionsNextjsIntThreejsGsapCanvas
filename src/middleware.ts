import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt-BR', 'pt-PT', 'it', 'es'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(pt-BR|pt-PT|it|es|en)/:path*'],
};
