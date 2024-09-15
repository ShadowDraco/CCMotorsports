import sendAppointmentEmail from '../../../../../../../../../mailgun/sendAppointmentEmail'
export async function POST(req, params) {
  const appointment = { ...params.params }

  try {
    await sendAppointmentEmail(appointment)
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
    console.log('ERROR sending APPOINTMENT EMAIL', error)
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
