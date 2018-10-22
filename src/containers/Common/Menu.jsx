// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MenuHome from './MenuHome';
import MenuUserMake from './MenuUserMake';
import MenuUserRegister from './MenuUserRegister';
import MenuUserList from './MenuUserList';
import MenuFenicsList from './MenuFenicsList';
import MenuPartnerList from './MenuPartnerList';
import MenuSetting from './MenuSetting';

function Menu(props): React.Node {
  const { className, history } = props;
  return (
    <div className={className}>
      <MenuHome history={history} />
      <MenuUserMake history={history} />
      <MenuUserRegister history={history} />
      <MenuUserList history={history} />
      <MenuFenicsList history={history} />
      <MenuPartnerList history={history} />
      <MenuSetting history={history} />
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Menu));
