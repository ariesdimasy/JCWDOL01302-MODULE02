import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUser, registerUser } from "../../api/user";

interface User {
    id: number
    name: string
    email: string
    password: string
}

export interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

const fetchAllUser = createAsyncThunk(
    'user/fetchAllUser',
    async () => {
        const response = await getAllUser()
        return response.data
    }
)

const registerUserAction = createAsyncThunk(
    'user/registerUserAction',
    async (data: { name: string, email: string, password: string }) => {
        const response = await registerUser(data)
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAllUser.fulfilled, (state, action) => {
            // Add user to the state array
            state.users = action.payload
        })
        builder.addCase(registerUserAction.fulfilled, () => {

        })
    },

})

// export default function counterReducer(state, action) {
//     switch (action) {
//         case 'action1':

//     }
// }

export { fetchAllUser, registerUserAction }


export default userSlice.reducer