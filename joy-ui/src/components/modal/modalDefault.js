import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { Modal, ModalDialog, DialogTitle, DialogContent, Typography, Sheet, Button } from '@mui/joy';
import SignIn from '../login/signIn';

const FadeModalDialog = (props) => {

    const { open, setOpen } = props ? props : {};
    const modalRef = useRef(null);

    return (
        <Transition in={open} timeout={400} nodeRef={modalRef}>
            {(state) => (
                <Modal
                    keepMounted
                    open={!['exited', 'exiting'].includes(state)}
                    onClose={() => setOpen(false)}
                    
                    ref={modalRef}
                    slotProps={{
                        backdrop: {
                            sx: {
                                opacity: 0,
                                backdropFilter: 'none',
                                transition: `opacity 400ms, backdrop-filter 400ms`,
                                ...{
                                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                }[state],
                            },
                        },
                    }}
                    sx={[
                        state === 'exited'
                            ? { visibility: 'hidden' }
                            : { visibility: 'visible' },
                    ]}
                >
                    
                    <ModalDialog
                        sx={{
                            opacity: 0,
                            transition: `opacity 300ms`,
                            ...{
                                entering: { opacity: 1 },
                                entered: { opacity: 1 },
                            }[state],
                        }}
                    >
                        <DialogTitle>Transition modal</DialogTitle>
                        <DialogContent>
                            <SignIn />
                        </DialogContent>
                    </ModalDialog>
                </Modal>
            )}
        </Transition>
    );
}

export default FadeModalDialog;