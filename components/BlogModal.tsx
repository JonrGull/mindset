import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function BlogModal({ postData, isOpen, onClose }) {
  
  const handleShare = async () => {
    try {
      await navigator.share({
        title: postData.title,
        text: postData.content,
        url: window.location.href,
      });
      console.log("Successful share");
    } catch (error) {
      console.log("Error sharing", error);
    }
  };

  return (
    <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Image src={postData.img} alt="blog photo" />
        <ModalHeader>{postData.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{postData.content}</ModalBody>
        <ModalFooter>
          <Button onClick={handleShare} variant="ghost" mr={3}>
            Share
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
