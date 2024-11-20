import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import { TimelineOppositeContent } from '@mui/lab';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';

export default function AlternateTimeline() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Container sx={{ padding: '3rem 0rem' }}>
      <Box sx={{ marginBottom: { md: '3rem', xs: '1.5rem' } }}>
        <Typography
          sx={{
            fontFamily: 'Urbanist',
            fontWeight: '600',
            textAlign: 'center',
            fontSize: { md: '48px', xs: '24px' },
          }}
        >
          Keep Your HOA Compliant:{' '}
          <span style={{ color: '#0d5961', fontWeight: '800' }}> What&apos;s the Next Step?</span>
        </Typography>
        <Typography sx={{ textAlign: 'center', fontSize: '20px' }}>
          To ensure ongoing compliance, HOAs must
        </Typography>
      </Box>

      <Timeline position={isSmallScreen ? 'right' : 'alternate-reverse'}>
        <TimelineItem
          sx={{
            '&.MuiTimelineItem-root:before': {
              flex: { md: 1, xs: 0 },
              padding: { md: '16px', xs: '0px' },
            },
          }}
        >
          {!isSmallScreen && (
            <TimelineOppositeContent color="text.secondary">
              {' '}
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: { md: '10px', xs: '5px' },
                  background: '#18909C',
                  width: { md: '150px', xs: '60px' },
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontWeight: '600', fontSize: { md: '24px', xs: '12px' } }}>
                  Step-01
                </Typography>
              </Box>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #dadfdd',
                boxShadow: '0px 8px 16px 0px rgba(27,92,60,0.06)',
                padding: { md: '40px', xs: '15px' },
              }}
            >
              <Typography sx={{ fontFamily: 'Urbanist', textAlign: 'left', fontSize: '1rem' }}>
                File updated information if any individual&apos;s ownership surpasses the 25%
                threshold.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem
          sx={{
            '&.MuiTimelineItem-root:before': {
              flex: { md: 1, xs: 0 },
              padding: { md: '16px', xs: '0px' },
            },
          }}
        >
          {!isSmallScreen && (
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'start' }}
            >
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: { md: '10px', xs: '5px' },
                  background: '#18909C',
                  width: { md: '150px', xs: '60px' },
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontWeight: '600', fontSize: { md: '24px', xs: '12px' } }}>
                  Step-02
                </Typography>
              </Box>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #dadfdd',
                boxShadow: '0px 8px 16px 0px rgba(27,92,60,0.06)',
                padding: { md: '40px', xs: '15px' },
              }}
            >
              <Typography sx={{ fontFamily: 'Urbanist', textAlign: 'left', fontSize: '1rem' }}>
                {' '}
                Submit updated Beneficial Ownership Information when a new board member is elected
                or removed.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
