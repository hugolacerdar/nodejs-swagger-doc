import { v4 as uuid4 } from "uuid";

class User {
  id: string = uuid4();
  name: string;
  admin = false;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
