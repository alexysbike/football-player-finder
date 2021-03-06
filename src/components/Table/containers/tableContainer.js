import { connect } from 'react-redux';
import Table from '../Table';
import { selectors } from '../../../modules';

export const mapStateToProps = state => ({
  players: selectors.player.playersFilteredSelector(state),
});

export default connect(mapStateToProps)(Table);
