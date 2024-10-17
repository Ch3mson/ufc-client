'use server'

import { revalidatePath } from 'next/cache'

export async function predictMatch(fighterA: string, fighterB: string) {
  try {
    const response = await fetch('https://ufcimage-243361513917.us-central1.run.app/match_predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fighter_A: fighterA,
        fighter_B: fighterB,
        model_type: 'rf',
      }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    revalidatePath('/') // Adjust this path as needed
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export async function fetchLatestDate() {
  try {
    const response = await fetch('https://ufcimage-243361513917.us-central1.run.app/latest_date', {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error('Failed to fetch the latest date')
    }

    const data = await response.json()
    return data.latest_date
  } catch (error) {
    console.error('Error fetching latest date:', error)
    throw error
  }
}