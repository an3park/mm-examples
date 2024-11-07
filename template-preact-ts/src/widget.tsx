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
      <h2>widget.tsx</h2>
      <button
        onClick={() => {
          MessengerSDK.navigation.openUrl(location.origin)
        }}
      >
        Open app
      </button>
    </div>
  )
}
