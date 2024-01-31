import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

interface SelectedSectionState {
  section: string;
  isOpenSheet: boolean;
}

const initialState: SelectedSectionState = {
  section: 'Inicio',
  isOpenSheet: false,
};

export const selectedSectionSlice = createSlice({
  name: 'selectedSection',
  initialState,
  reducers: {
    setSelectedSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
    setIsOpenSheet: (state, action: PayloadAction<boolean>) => {
      state.isOpenSheet = action.payload;
    },
  },
});

export const {setSelectedSection, setIsOpenSheet} =
  selectedSectionSlice.actions;

export default selectedSectionSlice.reducer;
