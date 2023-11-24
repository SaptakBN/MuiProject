import { styled } from '@mui/material/styles';
import { MuiBox } from '.';

export const StyledTextField = styled(MuiBox)(({ theme }) => {
    return ({
        'label': {
            display: 'block',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '0.01rem',
            wordSpacing: '0.2rem',
            textTransform: 'capitalize',
            marginBottom: '1rem'
        },

        '.MuiInputBase-root': {
            height: '4rem',
        },

        '.input-wrap': {
            position: 'relative',
        },

        '.MuiFormHelperText-root': {
            fontSize: '1.6rem'
        },

        '.eye-button': {
            position: 'absolute',
            right: '2rem',
            padding: '0',

            'svg': {
                fontSize: '2.5rem',
                color: theme.colors.color.color4
            }
        }

    })
});

