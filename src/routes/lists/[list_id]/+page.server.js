

import db from '$lib/db';

export async function load({ params }) {
  return {
    list: await db.getList(params.list_id)
  };
}