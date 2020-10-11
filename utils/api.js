import AsyncStorage from '@react-native-community/async-storage';

export const STORAGE_KEY = 'MobileFlashCards:Decks';

export const fetchData = async () => {
  try {
    //await AsyncStorage.clear()
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    return value != null
      ? JSON.parse(value)
      : dummyDB
  } catch(e) {
    // error reading value
  }
}

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
  } catch (e) {
    // saving error
  }
}

const dummyDB = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}