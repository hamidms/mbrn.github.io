import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Icon, Grid, LinearProgress, withStyles } from '@material-ui/core';

export interface KeySkillsSectionProps {
  resumeData: any;
  classes?: any;
}

class KeySkillsSectionInner extends React.Component<KeySkillsSectionProps, any> {
  public render() {
    return (
      <Card elevation={0}>
        <CardHeader title="Key Skills" titleTypographyProps={{ variant: 'h5', style: {color: '#5B6973'} }} />
        <CardContent>
          <Grid container spacing={40}>
            {this.props.resumeData.keySkills.mainSkills.map(skill => (
              <Grid item xs={4} sm={3} md={2} lg={2}>
                <img
                  src={"./public/assets/tech/" + skill.logo}
                  alt={skill.name}
                  className={this.props.classes.skillLogo}
                />

                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  classes={...this.props.classes}
                />
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    <Typography variant="caption" color="textSecondary">{skill.name}</Typography>
                  </div>

                  <div>
                    <Typography variant="caption" color="textSecondary">{skill.level + '%'}</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

          <div style={{ marginTop: 30 }}>
            <Typography variant="body1" style={{ display: 'inline' }} color="textSecondary">Other tech interests:</Typography>
            <div>
              {this.props.resumeData.keySkills.others.map(skill => (
                <Typography
                  variant="caption"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#b0bec5',
                    fontSize: 11,
                    color: 'white',
                    margin: '0 5px 2px 0',
                    padding: '3px 5px',
                    borderRadius: 4,
                  }}
                >
                  {skill}
                </Typography>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>
    );
  }
}

const styles = {
  root: {
    height: 12,
    borderRadius: 5,
    marginTop: 2,
  },
  colorPrimary: {
    backgroundColor: '#e8eaf5',
  },
  barColorPrimary: {
    backgroundColor: '#b0bec5',
  },
  skillLogo: {
    padding: '0 20%',
    maxWidth: '60%',
    filter: 'grayscale(50%)',
    opacity: 0.6,
    transition: 'all ease 400ms',
    '&:hover': {
      opacity: 1,
      filter: 'none',
      // cursor: 'pointer'
    }
  }
};

export const KeySkillsSection = withStyles(styles)(KeySkillsSectionInner);