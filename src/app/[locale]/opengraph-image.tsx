import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { isLocale } from '@/lib/site';
export const alt = 'Al Kayan Marketing — Build your brand. Sell the story.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; const locale = isLocale(raw) ? raw : 'ar'; const ar = locale === 'ar';
  const fontsDir = join(process.cwd(), 'node_modules/@fontsource/ibm-plex-sans-arabic/files');
  const [arabicFont, latinFont] = await Promise.all([
    readFile(join(fontsDir, 'ibm-plex-sans-arabic-arabic-400-normal.woff')),
    readFile(join(fontsDir, 'ibm-plex-sans-arabic-latin-400-normal.woff')),
  ]);
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '66px 76px', background: '#e9e0d5', color: '#30231f', fontFamily: 'IBM Plex Sans', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', width: 510, height: 510, border: '1px solid rgba(48,35,31,.18)', borderRadius: '50%', right: -65, top: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 340, height: 340, border: '1px solid rgba(180,123,85,.65)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 135, letterSpacing: -8 }}>01</div></div>
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 23, fontWeight: 700, letterSpacing: 8 }}>AL KAYAN<span style={{ fontSize: 13, color: '#b47b55', letterSpacing: 6, marginTop: 7 }}>MARKETING</span></div>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 820, fontFamily: ar ? 'IBM Plex Sans Arabic' : 'IBM Plex Sans', fontSize: ar ? 70 : 78, lineHeight: 1.16, fontWeight: 500, letterSpacing: -3, position: 'relative' }}><span>{ar ? 'علامةٌ أوضح.' : 'A clearer brand.'}</span><span>{ar ? 'وحضورٌ يستحق أن يُروى.' : 'A story worth telling.'}</span><span style={{ marginTop: 22, fontSize: 23, color: '#76695e', letterSpacing: 2 }}>{ar ? 'نبني علامتك. ونروي قصتها.' : 'Build your brand. Sell the story.'}</span></div>
    <div style={{ display: 'flex', fontSize: 13, letterSpacing: 4, color: '#776a60' }}>STRATEGY · CREATIVITY · DIGITAL GROWTH</div>
  </div>, { ...size, fonts: [{ name: 'IBM Plex Sans Arabic', data: arabicFont, style: 'normal', weight: 400 }, { name: 'IBM Plex Sans', data: latinFont, style: 'normal', weight: 400 }] });
}
