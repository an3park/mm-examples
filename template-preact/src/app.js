import MessengerSDK from '@muslimmessenger/miniapp-sdk'

export default function () {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>app.js</h2>
      <button
        onClick={() => {
          MessengerSDK.navigation.close()
        }}
      >
        Close app
      </button>
    </div>
  )
}
