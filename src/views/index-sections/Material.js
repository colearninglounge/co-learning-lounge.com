import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Container,
  Row,
  Col
} from "reactstrap";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    flexBasis: '90%',
    flexShrink: 0,
    fontSize: '1.125rem'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="8" md="12">
            <h4 className="title">What can you contribute?</h4>
          </Col>
        </Row>
        <div className="separator separator-primary"></div>
        <div className="section-story-overview">
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography className={classes.heading}>Help the community</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ul>
                      <li>Help to resolve the issues on GitHub and help to answer questions on FB group</li>
                      <li>Share your critical and valuable feedback/suggestion on how can we help you or how can we improve?</li>
                    </ul>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header">
                    <Typography className={classes.heading}>Help the community with content</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ul>
                      <li>Curation
                        <ul>
                          <li>Curating the content on our README</li>
                          <li>Curating and creating the interview questions and answers.</li>
                          <li>Curating the company list</li>
                        </ul>
                      </li>
                      <li>Be a content reviewer and content editor</li>
                      <li>Submit a full-fledged tutorial</li>
                      <li>Become a mentor</li>
                    </ul>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header">
                    <Typography className={classes.heading}>Take a lead and help us grow our community</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ul>
                      <li>Be a city/region head</li>
                      <li>Be a social media helper or influencer</li>
                    </ul>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'}>
                  {/*expandIcon={<ExpandMoreIcon />} */}
                  <ExpansionPanelSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header">
                    <Typography className={classes.heading}>Be a speaker at our events</Typography>
                  </ExpansionPanelSummary>
                </ExpansionPanel>
              </div>
            </Col>
          </Row>
        </div>
        <div className="seperator seperator-primary"></div>
      </Container>
    </div>
  );
}