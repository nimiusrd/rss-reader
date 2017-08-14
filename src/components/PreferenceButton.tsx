import * as React from 'react'

const PreferenceButton = ({feedId, itemId}: any) => {
  const handlePreference = (event: any) => {
    writePreference('hoge', feedId, itemId, event.target.value)
  }

  return (
    <form>
      <input
        id={`preference1-${itemId}`}
        name={`preference-${itemId}`}
        onClick={handlePreference}
        type="radio"
        value="1"
      />
      <label htmlFor={`preference1-${itemId}`}>
        {'1'}
      </label>
      <input
        id={`preference2-${itemId}`}
        name={`preference-${itemId}`}
        onClick={handlePreference}
        type="radio"
        value="2"
      />
      <label htmlFor={`preference2-${itemId}`}>
        {'2'}
      </label>
      <input
        id={`preference3-${itemId}`}
        name={`preference-${itemId}`}
        onClick={handlePreference}
        type="radio"
        value="3"
      />
      <label htmlFor={`preference3-${itemId}`}>
        {'3'}
      </label>
    </form>
  )
}

export {PreferenceButton}
