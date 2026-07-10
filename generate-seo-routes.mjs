import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const domain = 'https://hunthings.co';

const categoryRoutes = [
  ['Base de categoria principal do site..dc.html', '/explore/style/', 'Style'],
  ['Base de Categoria - Beauty.dc.html', '/explore/beauty/', 'Beauty'],
  ['Base de Categoria - Home.dc.html', '/explore/home/', 'Home'],
  ['Base de Categoria - Lifestyle.dc.html', '/explore/lifestyle/', 'Lifestyle'],
  ['Base de Categoria - Tech.dc.html', '/explore/tech/', 'Tech'],
  ['Base de Categoria - Health.dc.html', '/explore/health/', 'Health'],
  ['Base de Categoria - Hobbies.dc.html', '/explore/hobbies/', 'Hobbies'],
  ['Base de Categoria - Aesthetics.dc.html', '/explore/aesthetics/', 'Aesthetics'],
];

const tagGroups = {
  Style: ['Clothing', 'Shoes', 'Bags', 'Jewelry', 'Hair-Accessories', 'Style-Tools', 'Sunglasses'],
  Beauty: ['Makeup', 'Skincare', 'Haircare', 'Body-Care', 'Fragrance', 'Beauty-Tools', 'Nails'],
  Home: ['Decor', 'Kitchenware-and-Appliances', 'Bedding', 'Storage-and-Organization', 'Furniture', 'Tableware', 'Plants-and-Gardening'],
  Lifestyle: ['Travel', 'Books-and-Stationery', 'Routines', 'Self-Development', 'Career', 'Pets', 'Outdoor'],
  Tech: ['Notion', 'No-Code-Apps', 'Web-Design', 'Desk-Setup', 'Gadgets', 'AI-Tools', 'Apps-and-Software'],
  Health: ['Nutrition-and-Sleep', 'Nervous-System', 'Womens-Health', 'Posture-and-Ergonomics', 'Tracking-Tools', 'Hygiene', 'Recovery'],
};

const tagRoutes = Object.entries(tagGroups).flatMap(([category, tags]) => tags.map((tag) => [
  `Tag - ${category} - ${tag}.dc.html`,
  `/explore/${category.toLowerCase()}/${tag.toLowerCase()}/`,
  `${tag.replaceAll('-', ' ')} | ${category}`,
]));

const otherRoutes = [
  ['Explore.dc.html', '/explore/', 'Explore'],
  ['Tools.dc.html', '/tools/', 'Hunthings Tools'],
  ['Tool - Patient Manager.dc.html', '/tools/patient-manager/', 'Patient Manager', true],
  ['Tool - Life Planner.dc.html', '/tools/life-planner/', 'Life Planner', true],
  ['Tool - Skincare Organizer.dc.html', '/tools/skincare-organizer/', 'Skincare Organizer', true],
  ['Tool - Content Hub.dc.html', '/tools/content-hub/', 'Content Hub', true],
  ['Base de Produtos - Bestsellers.dc.html', '/products/bestsellers/', 'Bestsellers'],
  ['Base de Produtos - Novo.dc.html', '/products/new/', 'New products'],
  ['Base de Produtos - Editors Pick.dc.html', '/products/editors-pick/', "Editor's Pick"],
  ['Base de Produtos - Tendencia.dc.html', '/products/trending/', 'Trending products'],
  ['Base de Produtos - Essencial.dc.html', '/products/essential/', 'Essential products'],
  ['Sobre.dc.html', '/about/', 'About Hunthings'],
  ['Contato.dc.html', '/contact/', 'Contact Hunthings'],
  ['Busca.dc.html', '/search/', 'Search Hunthings', true],
  ['Politica de Privacidade.dc.html', '/privacy-policy/', 'Privacy Policy'],
  ['Termos de Uso.dc.html', '/terms-of-use/', 'Terms of Use'],
  ['Disclosure de Afiliado.dc.html', '/affiliate-disclosure/', 'Affiliate Disclosure'],
  ['Em Breve.dc.html', '/coming-soon/', 'Coming soon', true],
  ['Base de Blog Post.dc.html', '/templates/blog-post/', 'Blog post template', true],
  ['Base de Produto.dc.html', '/templates/product/', 'Product template', true],
];

const routes = [
  ['index.html', '/', 'Hunthings', false],
  ...categoryRoutes.map(([source, route, title]) => [source, route, title, false]),
  ...tagRoutes.map(([source, route, title]) => [source, route, title, false]),
  ...otherRoutes,
];

const routeBySource = new Map(routes.map(([source, route]) => [source, route]));
routeBySource.set('Home.dc.html', '/');
routeBySource.set('index.html', '/');

function descriptionFor(title, route) {
  if (route === '/') return 'Discover curated products, practical tools and considered ideas for a life with more intention.';
  if (route.startsWith('/explore/')) return `Explore ${title} through curated products, practical guides and thoughtful discoveries from Hunthings.`;
  if (route.startsWith('/products/')) return `Browse ${title.toLowerCase()} product discoveries, selected for quality, design and everyday value.`;
  if (route.startsWith('/tools/')) return `Explore ${title} by Hunthings: thoughtful tools designed to help organize and simplify your routine.`;
  return `${title} from Hunthings, a curated discovery platform for people who care about quality, details and better choices.`;
}

function injectHead(html, route, title, noindex) {
  const withoutPreviousSeo = html.replace(/\s*<!-- seo-route:start -->[\s\S]*?<!-- seo-route:end -->/g, '');
  const robots = noindex ? '<meta name="robots" content="noindex,follow">' : '';
  const pageTitle = title === 'Hunthings' ? 'Hunthings' : `${title} | Hunthings`;
  const seoTags = [
    `<title>${pageTitle}</title>`,
    `<meta name="description" content="${descriptionFor(title, route)}">`,
    `<link rel="canonical" href="${domain}${route}">`,
    robots,
  ].filter(Boolean).map((tag) => `  ${tag}`).join('\n');
  const seo = `<!-- seo-route:start -->\n${seoTags}\n  <!-- seo-route:end -->`;
  return withoutPreviousSeo
    .replace(/(<helmet>[\s\S]*?<title>)[\s\S]*?(<\/title>)/, `$1${pageTitle}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${domain}${route}$2`)
    .replace('</head>', `  ${seo}\n</head>`);
}

function rewriteLinks(html) {
  let updated = html;
  for (const [oldPath, newPath] of routeBySource) {
    updated = updated.split(oldPath).join(newPath);
  }
  updated = updated.replace(/\s*<base href="\/">\s*/g, '\n');
  return updated.replace('<head>', '<head>\n<base href="/">');
}

const rootPages = (await readdir(root)).filter((file) => file.endsWith('.html'));
for (const source of rootPages) {
  const sourcePath = path.join(root, source);
  await writeFile(sourcePath, rewriteLinks(await readFile(sourcePath, 'utf8')));
}

for (const [source, route, title, noindex = false] of routes) {
  const sourceHtml = await readFile(path.join(root, source), 'utf8');
  const routeHtml = injectHead(sourceHtml, route, title, noindex);

  if (route === '/') {
    await writeFile(path.join(root, source), routeHtml);
    continue;
  }
  const outputDir = path.join(root, route.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), routeHtml);
}

const redirects = routes
  .filter(([source, route]) => source !== 'Home.dc.html' && route !== '/')
  .map(([source, route]) => `/${encodeURIComponent(source)} ${route} 301`);
redirects.unshift('/Home.dc.html / 301', '/index.html / 301');
await writeFile(path.join(root, '_redirects'), `${redirects.join('\n')}\n`);

const sitemapRoutes = routes.filter(([, route,, noindex]) => route !== '/' && !noindex).map(([, route]) => route);
sitemapRoutes.unshift('/');
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapRoutes.map((route) => `  <url><loc>${domain}${route}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(path.join(root, 'sitemap.xml'), sitemap);
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`);

const noindexRoutes = routes.filter(([, route,, noindex]) => noindex).map(([, route]) => route);
const headers = noindexRoutes.map((route) => `${route}*\n  X-Robots-Tag: noindex, follow`).join('\n\n');
await writeFile(path.join(root, '_headers'), `${headers}\n`);

console.log(`Generated ${routes.length - 1} SEO routes and ${sitemapRoutes.length} sitemap URLs.`);
