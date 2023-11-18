import getRawBody from 'raw-body';
import Stripe from 'stripe';
import { supabase } from 'supabase';

const stripe = new Stripe('sk_test_51OAF7wE2GvzqOTCpJCIp0T2Z3JN1t4Q4YrqjCoMavIpaZMMXVYOx7RVQZG1yqHK4edhs3JxKOcaoGSAtsf68XIWL00niCLF9Df', {
  apiVersion: '2020-08-27', 
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const signingSecret = 'whsec_hl2B9REkY14yskoLe0ZbXFJqrnwaCOZq';

  const signature = req.headers['stripe-signature'];

  let event;
  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, signature, signingSecret);
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).end();
    return;
  }

  try {
    switch (event.type) {
      case 'customer.subscription.updated':
        await updateSubscription(event);
        break;
      case 'customer-subscription.deleted':
        await deleteSubscription(event);
        break;
    }

 
    res.send({ success: true });
  } catch (error) {
    console.error(error.message);
    res.send({ success: false });
  }
}

async function updateSubscription(event) {
  const subscription = event.data.object;
  const stripe_customer_id = subscription.customer;
  const subscription_status = subscription.status;
  const price = subscription.items.data[0].price.id;
  const { data: profile } = await supabase
    .from('profile')
    .select('*')
    .eq('stripe_customer_id', stripe_customer_id)
    .single();

  if (profile) {
    const updatedSubscription = {
      subscription_status,
      price,
    };
    await supabase
      .from('profile')
      .update(updatedSubscription)
      .eq('stripe_customer_id', stripe_customer_id);
  } else {
    const customer = await stripe.customers.retrieve(stripe_customer_id);
    const name = customer.name;
    const email = customer.email;
    const newProfile = {
      name,
      email,
      stripe_customer_id,
      subscription_status,
      price,
    };
    await supabase.auth.admin.createUser({
      email,
      email_confirm: true,
      user_metadata: newProfile,
    });
  }
}

async function deleteSubscription(event) {
    const subscription = event.data.object;
    const stripe_customer_id = subscription.customer;
    const subscription_status = subscription.status;
    const deletedSubscription={
        subscription_status,
        price: null
    }
    await supabase
    .from("profile")
    .update(deletedSubscription)
    .eq("stripe_customer_id", stripe_customer_id);
}
