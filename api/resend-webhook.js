export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;
  const id = data?.email_id ?? '(no id)';
  const to = data?.to?.[0] ?? data?.to ?? '(no recipient)';
  const ts = data?.created_at ?? '(no timestamp)';

  switch (type) {
    case 'email.delivered':
      console.log(`[delivered] ${id} → ${to} at ${ts}`);
      break;
    case 'email.opened':
      console.log(`[opened]    ${id} → ${to} at ${ts}`);
      break;
    case 'email.clicked':
      console.log(`[clicked]   ${id} → ${to} url=${data?.click?.link ?? '(no url)'} at ${ts}`);
      break;
    case 'email.bounced':
      console.log(`[bounced]   ${id} → ${to} reason=${data?.bounce?.message ?? '(no reason)'} at ${ts}`);
      break;
    default:
      console.log(`[unknown]   type=${type} id=${id} at ${ts}`);
  }

  return res.status(200).json({ received: true });
}
