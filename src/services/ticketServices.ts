const mockTicketList = {
  'T-001': {
    id: 'T-001',
    title: 'Implement user authentication',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Alice Johnson',
    dueDate: '2025-04-10',
    description: 'Develop OAuth-based authentication for secure login.',
  },
  'T-002': {
    id: 'T-002',
    title: 'Fix dashboard UI bugs',
    status: 'Open',
    priority: 'Medium',
    assignee: 'Brian Lee',
    dueDate: '2025-04-12',
    description: 'Resolve layout issues and improve responsiveness.',
  },
  'T-003': {
    id: 'T-003',
    title: 'Write unit tests for API',
    status: 'Done',
    priority: 'Low',
    assignee: 'Chloe Kim',
    dueDate: '2025-04-08',
    description: 'Increase test coverage to ensure API stability.',
  },
  'T-004': {
    id: 'T-004',
    title: 'Update project documentation',
    status: 'In Review',
    priority: 'Medium',
    assignee: 'Daniel Smith',
    dueDate: '2025-04-09',
    description: 'Add setup guides and API documentation.',
  },
  'T-005': {
    id: 'T-005',
    title: 'Database migration',
    status: 'Blocked',
    priority: 'Critical',
    assignee: 'Emma Davis',
    dueDate: '2025-04-11',
    description: 'Migrate from MongoDB to PostgreSQL.',
  },
  'T-006': {
    id: 'T-006',
    title: 'Code refactoring',
    status: 'Open',
    priority: 'Low',
    assignee: 'Frank Turner',
    dueDate: '2025-04-15',
    description: 'Optimize backend services for better performance.',
  },
};

const mockTicketDetailsList: Record<string, Ticket> = {
  'T-001': {
    id: 'T-001',
    title: 'Implement user authentication',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Alice Johnson',
    dueDate: '2025-04-10',
    description: 'Develop OAuth-based authentication for secure login.',
    createdAt: '2025-03-15',
    updatedAt: '2025-04-01',
    reporter: 'John Doe',
    category: 'Backend',
    tags: ['auth', 'security'],
    progress: 60, // percentage
    comments: [
      { author: 'John Doe', text: 'Please implement token expiration.' },
      { author: 'Alice Johnson', text: 'Working on it!' },
    ],
  },
  'T-002': {
    id: 'T-002',
    title: 'Fix dashboard UI bugs',
    status: 'Open',
    priority: 'Medium',
    assignee: 'Brian Lee',
    dueDate: '2025-04-12',
    description: 'Resolve layout issues and improve responsiveness.',
    createdAt: '2025-03-20',
    updatedAt: '2025-04-02',
    reporter: 'Chris Park',
    category: 'Frontend',
    tags: ['UI', 'bugfix'],
    progress: 20, // percentage
    comments: [
      { author: 'Chris Park', text: 'Dashboard is not responsive on mobile.' },
    ],
  },
  'T-003': {
    id: 'T-003',
    title: 'Write unit tests for API',
    status: 'Done',
    priority: 'Low',
    assignee: 'Chloe Kim',
    dueDate: '2025-04-08',
    description: 'Increase test coverage to ensure API stability.',
    createdAt: '2025-03-18',
    updatedAt: '2025-04-05',
    reporter: 'Alex Smith',
    category: 'Testing',
    tags: ['tests', 'coverage'],
    progress: 100, // percentage
    comments: [
      { author: 'Alex Smith', text: 'Great job! Coverage increased by 20%.' },
    ],
  },
  'T-004': {
    id: 'T-004',
    title: 'Update project documentation',
    status: 'In Review',
    priority: 'Medium',
    assignee: 'Daniel Smith',
    dueDate: '2025-04-09',
    description: 'Add setup guides and API documentation.',
    createdAt: '2025-03-22',
    updatedAt: '2025-04-06',
    reporter: 'Sophia Lee',
    category: 'Documentation',
    tags: ['docs', 'guides'],
    progress: 85, // percentage
    comments: [
      { author: 'Sophia Lee', text: 'Please include environment variables.' },
    ],
  },
  'T-005': {
    id: 'T-005',
    title: 'Database migration',
    status: 'Blocked',
    priority: 'Critical',
    assignee: 'Emma Davis',
    dueDate: '2025-04-11',
    description: 'Migrate from MongoDB to PostgreSQL.',
    createdAt: '2025-03-25',
    updatedAt: '2025-04-07',
    reporter: 'Liam Brown',
    category: 'Database',
    tags: ['migration', 'database'],
    progress: 40, // percentage
    comments: [
      { author: 'Emma Davis', text: 'Encountered data inconsistency issues.' },
    ],
  },
  'T-006': {
    id: 'T-006',
    title: 'Code refactoring',
    status: 'Open',
    priority: 'Low',
    assignee: 'Frank Turner',
    dueDate: '2025-04-15',
    description: 'Optimize backend services for better performance.',
    createdAt: '2025-03-28',
    updatedAt: '2025-04-08',
    reporter: 'Mia Wilson',
    category: 'Backend',
    tags: ['refactoring', 'performance'],
    progress: 10, // percentage
    comments: [],
  },
};

type WaitFunction = {
  (ms?: number): Promise<void>;
};

const wait: WaitFunction = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms));

type Response = Record<
  string,
  {
    id: string;
    title: string;
    status: string;
    priority: string;
    assignee: string;
    dueDate: string;
    description: string;
  }
>;

interface Comment {
  author: string;
  text: string;
}

export interface Ticket {
  id: string;
  title: string;
  status: 'Open' | 'In Progress' | 'In Review' | 'Done' | 'Blocked'; // Enum-like for status
  priority: 'Low' | 'Medium' | 'High' | 'Critical'; // Priority levels
  assignee: string;
  dueDate: string; // ISO format date
  description: string;
  createdAt: string; // ISO format date
  updatedAt: string; // ISO format date
  reporter: string;
  category: 'Backend' | 'Frontend' | 'Testing' | 'Documentation' | 'Database';
  tags: string[]; // Array of tags
  progress: number; // Percentage from 0 to 100
  comments: Comment[]; // Array of comment objects
}

export const getTickets = async (): Promise<Response> => {
  await wait(750);

  return mockTicketList;
};

export const getTicket = async (ticketId: string): Promise<Ticket> => {
  await wait(500);

  return mockTicketDetailsList[ticketId as keyof typeof mockTicketDetailsList];
};
