const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time));


export const user = {
  state: {
    name: 'Eliot',
    isAdmin: false
  },
  reducers: {
    setName(_, payload) {
      return { name: payload }
    }
  }
}

export const count = {
  state: 0,
  reducers: {
    addBy(state, payload) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async addByAsync(payload, state) {
      await delay(1000)
      dispatch.count.addBy(1)
    }
  })
}