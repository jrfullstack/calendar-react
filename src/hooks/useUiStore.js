import {useSelector, useDispatch} from 'react-redux';
import { onOpenDateModal, onCloseDateModal } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {isDateModalOpen} = useSelector(state => state.ui)

    const openDateModal = () => {
        dispatch(onOpenDateModal());

    }

    const closeDayModal = () => {
        dispatch(onCloseDateModal())
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
        ? openDateModal()
        : closeDayModal();
    }

    return {
        // propiedades
        isDateModalOpen,


        // métodos
        openDateModal,
        closeDayModal,
        toggleDateModal
    }


}
