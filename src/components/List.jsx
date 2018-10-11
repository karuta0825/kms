import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import ViewListIcon from '@material-ui/icons/ViewList';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PartnerIcon from '@material-ui/icons/WC';
import ServiceIcon from '@material-ui/icons/RoomService';
import ServerIcon from '@material-ui/icons/Computer';
import TemplateIcon from '@material-ui/icons/NoteAdd';
import PersonIcon from '@material-ui/icons/Person';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleList extends React.Component {
  selectMenu = (menuName: string) => {
    const { history } = this.props;
    switch (menuName) {
      case 'makeKid':
        history.push('/makeKid');
        break;
      case 'registerKid':
        history.push('/registerKid');
        break;
      case 'kids':
        history.push('/kids');
        break;
      default:
        history.push('/');
        break;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={() => { this.selectMenu('home'); }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItem>

          <Divider />

          <ListItem button onClick={() => { this.selectMenu('makeKid'); }}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="ユーザー作成" />
          </ListItem>

          <ListItem button divider onClick={() => { this.selectMenu('registerKid'); }}>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary="ユーザー登録" />
          </ListItem>

          <ListItem button onClick={() => { this.selectMenu('kids'); }}>
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="ユーザー一覧" />
          </ListItem>

          <ListItem button onClick={() => { this.selectMenu('fenics'); }}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Fenics一覧" />
          </ListItem>

          <ListItem button divider onClick={() => { this.selectMenu('partners'); }}>
            <ListItemIcon>
              <PartnerIcon />
            </ListItemIcon>
            <ListItemText primary="パートナ一覧" />
          </ListItem>

          <ListItem button onClick={() => { this.selectMenu('servers'); }}>
            <ListItemIcon>
              <ServerIcon />
            </ListItemIcon>
            <ListItemText primary="サーバ情報" />
          </ListItem>

          <ListItem button onClick={() => { this.selectMenu('services'); }}>
            <ListItemIcon>
              <ServiceIcon />
            </ListItemIcon>
            <ListItemText primary="サービス情報" />
          </ListItem>

          <ListItem button onClick={() => { this.selectMenu('template'); }}>
            <ListItemIcon>
              <TemplateIcon />
            </ListItemIcon>
            <ListItemText primary="テンプレート" />
          </ListItem>

          <ListItem button onClick={() => { this.selectMenu('accounts'); }}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="アカウント" />
          </ListItem>

        </List>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SimpleList));
