import { connect } from 'react-redux';
import Repentance from './repentance';

let mapStatetoProps = (state) => {
    return {
        repentancePrayer: state.repentancePage.repentancePrayer,
        entryTitle: state.repentancePage.entryTitle,
        shareButtons: state.repentancePage.shareButtons,
    }
}

const RepentanceContainer = connect(mapStatetoProps, {})(Repentance);

export default RepentanceContainer;