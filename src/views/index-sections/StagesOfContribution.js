import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
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
    }
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Row className="justify-content-center text-center">
                <Col lg="8" md="12">
                    <h4 className="title">Stages of Contribution</h4>
                </Col>
            </Row>
            <div className="section-story-overview">
                <Row>
                    <Col className="ml-auto mr-auto" md="12">
                        <div className={classes.root}>
                            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">
                                    <Typography className={classes.heading}>Prefer Coding?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <ul className="mb-3">
                                        <li>Jump right in with the help of our guidelines document</li>
                                        <li>Find an open issue on GitHub and help resolve it</li>
                                        <li>Report a bug and help us resolve it</li>
                                    </ul>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header">
                                    <Typography className={classes.heading}>Like contributing?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <ul className="mb-3">
                                        <li>Answer questions on our community groups</li>
                                        <li>Solve problems for example from Kaggle and share the code on git hub with documentation</li>
                                        <li>Create a blog post about your topic of interest</li>
                                    </ul>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header">
                                    <Typography className={classes.heading}>Enjoy planning events?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <ul className="mb-3">
                                        <li>Organize an online or offline event</li>
                                        <li>Organize a meetup, workshop or webinar</li>
                                        <li>Let's collaborate and organize an event</li>
                                    </ul>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header">
                                    <Typography className={classes.heading}>Want to mentor?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <ul className="mb-3">
                                        <li>Create a tutorial</li>
                                        <li>Support others on creating a tutorial</li>
                                        <li>Don't forget to share it with us at colearninglounge@gmail.com</li>
                                    </ul>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}