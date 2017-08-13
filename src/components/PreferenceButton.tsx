import * as React from 'react'

const PreferenceButton = ({id}: any) => {
  const handlePreference = (event: any) => {
    console.log(event.target.value)
  }

  return (
    <form
      action=""
      method="post"
    >
      <input
        id={`preference1-${id}`}
        name={`preference-${id}`}
        onClick={handlePreference}
        type="radio"
        value="1"
      />
      <label htmlFor={`preference1-${id}`}>
        {'1'}
      </label>
      <input
        id={`preference2-${id}`}
        name={`preference-${id}`}
        onClick={handlePreference}
        type="radio"
        value="2"
      />
      <label htmlFor={`preference2-${id}`}>
        {'2'}
      </label>
      <input
        id={`preference3-${id}`}
        name={`preference-${id}`}
        onClick={handlePreference}
        type="radio"
        value="3"
      />
      <label htmlFor={`preference3-${id}`}>
        {'3'}
      </label>
    </form>
  )
}

export {PreferenceButton}
