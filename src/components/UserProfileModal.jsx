"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";


export function UserProfileModal() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log(name, image);
        await authClient.updateUser({
            image,
            name,
        })

    }
    return (
        <Modal>
            <Button variant="secondary"> <MdEditNote /> Updata Profile </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaRegUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Change your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Change your image" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}