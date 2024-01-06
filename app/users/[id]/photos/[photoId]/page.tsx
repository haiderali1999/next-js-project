import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const Photos = (props: Props) => {
  const {
    params: { id, photoId },
  } = props;
  return (
    <div>
      userid {id} photoId {photoId}
    </div>
  );
};

export default Photos;
