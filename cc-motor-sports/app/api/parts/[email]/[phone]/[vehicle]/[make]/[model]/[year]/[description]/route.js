import sendPartsEmail from '../../../../../../../../../mailgun/sendPartsEmail'
export async function POST(req, params) {
  const partsDetails = { ...params.params }

  try {
    await sendPartsEmail(partsDetails)
    console.log('Email sent successfully')
    return new Response(
      JSON.stringify({
        success: 'success',
        message: 'Request received',
        status: 200,
        statusText: 'Your request has been received',
      })
    )
  } catch (error) {
    console.log('ERROR sending PARTS EMAIL', error)
    return new Response(
      JSON.stringify({
        success: 'failed',
        message: 'Request received',
        status: 500,
        statusText: 'There was an error',
      })
    )
  }
}
