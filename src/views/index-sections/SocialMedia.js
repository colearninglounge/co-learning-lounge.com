import React from 'react';
import { Row, Col, UncontrolledTooltip, Container } from "reactstrap";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function SocialMedia() {
    const SocialMediaURL = {
        facebook: "http://bit.ly/CoLearningLoungeFBGroup", //"https://www.facebook.com/groups/colearninglounge/"
        instagram: "https://bit.ly/CoLearningLoungeInstagram", //"https://www.instagram.com/colearninglounge/"
        slack: "https://co-learninglounge.slack.com/", //
        linkedin: "https://bit.ly/CoLearningLoungeLinkedInPage", //"https://www.linkedin.com/company/colearninglounge"
        telegram: "https://bit.ly/CLL_TG", //"https://t.me/ColearningLounge_AIRoom"
        youtube: " https://bit.ly/CLLYT", //"https://www.youtube.com/channel/UC0ZkwV6cGrkgO-f2V_Tvw_Q?view_as=subscriber"
        github: "http://bit.ly/CoLearningLoungeGitHub" //"https://github.com/colearninglounge/co-learning-lounge/"
    }
    return (
        <div className="section section-about-us">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg="8" md="12">
                        <h3 className="title">You can connect with us here</h3>
                    </Col>
                </Row>
                <Row>
                <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="facebook" id="facebook-tooltip"
                        href={SocialMediaURL.facebook}
                        target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                        </SvgIcon>
                        <UncontrolledTooltip target="#facebook-tooltip">
                            Join us on Facebook
                        </UncontrolledTooltip>
                    </IconButton>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="linkedin" id="linkedin-tooltip"
                    href={SocialMediaURL.linkedin}
                    target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                        </SvgIcon>
                        <UncontrolledTooltip target="#linkedin-tooltip">
                            Follow us on LinkedIn
              </UncontrolledTooltip>
                    </IconButton>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="github" id="github-tooltip"
                    href={SocialMediaURL.github}
                    target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                        </SvgIcon>
                        <UncontrolledTooltip target="#github-tooltip">
                        Contribute with us on GitHub
              </UncontrolledTooltip>
                    </IconButton>
                </Col>

                {/* <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="slack" id="slack-tooltip"
                    href={SocialMediaURL.slack}
                    target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path d="M9,7C8.359,7,4.639,7,4,7C2.895,7,2,7.895,2,9c0,1.105,0.895,2,2,2c0.639,0,4.359,0,5,0c1.105,0,2-0.895,2-2	C11,7.895,10.105,7,9,7z"></path><path d="M11,4c0,0.598,0,2,0,2S9.507,6,9,6C7.895,6,7,5.105,7,4s0.895-2,2-2S11,2.895,11,4z"></path><path d="M7,14c0,0.641,0,4.361,0,5c0,1.105,0.895,2,2,2c1.105,0,2-0.895,2-2c0-0.639,0-4.359,0-5c0-1.105-0.895-2-2-2	C7.895,12,7,12.895,7,14z"></path><path d="M4,12c0.598,0,2,0,2,0s0,1.493,0,2c0,1.105-0.895,2-2,2s-2-0.895-2-2S2.895,12,4,12z"></path><path d="M14,16c0.641,0,4.361,0,5,0c1.105,0,2-0.895,2-2c0-1.105-0.895-2-2-2c-0.639,0-4.359,0-5,0c-1.105,0-2,0.895-2,2	C12,15.104,12.895,16,14,16z"></path><path d="M12,19c0-0.598,0-2,0-2s1.493,0,2,0c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2S12,20.104,12,19z"></path><path d="M16,9c0-0.641,0-4.361,0-5c0-1.105-0.895-2-2-2c-1.105,0-2,0.895-2,2c0,0.639,0,4.359,0,5c0,1.105,0.895,2,2,2	C15.104,11,16,10.104,16,9z"></path><path d="M19,11c-0.598,0-2,0-2,0s0-1.493,0-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2S20.104,11,19,11z"></path>
                        </SvgIcon>
                        <UncontrolledTooltip target="#slack-tooltip">
                            Join us on Slack
                        </UncontrolledTooltip>
                    </IconButton>
                </Col> */}
                <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="telegram" id="telegram-tooltip"
                    href={SocialMediaURL.telegram}
                    target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
                        </SvgIcon>
                        <UncontrolledTooltip target="#telegram-tooltip">
                            Join us on Telegram
              </UncontrolledTooltip>
                    </IconButton>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="youtube" id="youtube-tooltip"
                    href={SocialMediaURL.youtube}
                    target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </SvgIcon>
                        <UncontrolledTooltip target="#youtube-tooltip">
                            Subscribe to our YouTube Channel
              </UncontrolledTooltip>
                    </IconButton>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="2">
                    <IconButton aria-label="instagram" id="instagram-tooltip"
                    href={SocialMediaURL.instagram}
                    target="_blank">
                        <SvgIcon className="social-media-icons">
                            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                        </SvgIcon>
                        <UncontrolledTooltip target="#instagram-tooltip">
                            Follow us on Instagram
              </UncontrolledTooltip>
                    </IconButton>
                </Col>
            </Row>
            </Container>
        </div>
    );
}