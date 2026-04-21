export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  console.log('Resend webhook received:');
  console.log('  event_type:', type);
  console.log('  email_id:  ', data?.email_id);
  console.log('  timestamp: ', data?.created_at);

  return res.status(200).json({ received: true });
}
