import {FC} from "react";

const EventIdPage: FC<{params: {eventId: string}}> = ({params}) => <h1>Event ID {params.eventId} page</h1>;

export default EventIdPage;