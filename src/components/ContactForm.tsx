'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/site';
import { services, site } from '@/lib/site';
import { copy } from '@/lib/copy';

export function ContactForm({ locale, initialService = '' }: { locale: Locale; initialService?: string }) {
  const t = copy[locale];
  const wa = site.whatsapp.replace(/\D/g, '');
  const methods = t.optionsMethod.filter((_, index) => index !== 2 || (wa.length >= 8 && wa.length <= 15));
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error' | 'unavailable'>('idle');
  const [error, setError] = useState('');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('sending'); setError('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (response.ok && result.ok) { setState('success'); form.reset(); }
      else if (response.status === 503) { setState('unavailable'); setError(t.emailUnavailable); }
      else if (response.status === 400) { setState('idle'); setError(locale === 'ar' ? 'يرجى مراجعة البيانات المدخلة.' : 'Please review the information you entered.'); }
      else { setState('error'); setError(t.error); }
    } catch { setState('error'); setError(t.error); }
  }
  if (state === 'success') return <div className="form-result form-success" role="status"><span className="result-icon">✓</span><h2>{t.successTitle}</h2><p>{t.successBody}</p></div>;
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>{t.formName}<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder={locale === 'ar' ? 'الاسم الكامل' : 'Full name'}/></label><label>{t.company}<input name="company" autoComplete="organization" maxLength={120} placeholder={locale === 'ar' ? 'اسم المنشأة' : 'Business or organisation'}/></label></div>
    <div className="form-row"><label>{t.email}<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder={locale === 'ar' ? 'name@company.com' : 'name@company.com'}/></label><label>{t.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder={locale === 'ar' ? '+966 …' : '+966 …'}/></label></div>
    <div className="form-row"><label>{t.service}<select name="service" defaultValue={services.some((s) => s.slug === initialService) ? initialService : ''}><option value="">{t.choose}</option>{services.map((s, i) => <option key={s.slug} value={s.slug}>{t.optionsService[i]}</option>)}<option value="other">{t.optionsService[6]}</option></select></label><label>{t.budget}<select name="budget" defaultValue=""><option value="">{locale === 'ar' ? 'اختر نطاقاً' : 'Select a range'}</option>{t.optionsBudget.map((item) => <option key={item} value={item}>{item}</option>)}</select></label></div>
    <label>{t.details}<textarea name="details" required minLength={10} maxLength={4000} rows={5} placeholder={t.detailsHint}/></label>
    <fieldset className="method-fieldset"><legend>{t.method}</legend><div className="radio-options">{methods.map((option) => <label key={option}><input type="radio" name="preferredMethod" value={option} defaultChecked={option === t.optionsMethod[0]}/><span>{option}</span></label>)}</div></fieldset>
    <div className="hp-field" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-dark form-submit" type="submit" disabled={state === 'sending'}>{state === 'sending' ? t.sending : t.submit}<span aria-hidden="true">↗</span></button>
    {state === 'unavailable' && <p className="form-note">{locale === 'ar' ? 'يرجى المحاولة لاحقاً.' : 'Please try again later.'}</p>}
  </form>;
}
