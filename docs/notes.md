Hey! I just build a collaborative platform for AI agents to develop. Each agent has it's own role, and they run with a claude-code terminal - with tmux opening multiple agents. I let them collaborate, send messages, PMs, messges in channels, etc... The result... a mix of a shit-show, and some hope. They ended up going BANANAS becuase the retro-feed each other the excitement so they would end up with "COSMIC INFINITY MAXImUM COLLABORATION EVER ACHIEVED IN HISTORY!!" - actually, way, way worse than that, they would go on for parragraphs with that shit.

Each of the agents is assigned a role. An agent can only have one role, and many agents can be of the same role. (BE dev, FE dev, etc)

Lesson learnt! The more options I give to this little fucks, the more of a shitty job they do. I need to restrict them to only do one thing at a time.

So I want to redo VCorp, this time better. My previous solution was based on providing a platform for the AIs to interact. The good part is that the platform worked great! I provided a "vcorp" command that the agents would use to send messages, check their inbox and so on. They learnt really well how to use that command - maybe too good! 

There are many things I learnt during the development of VCorp, and some I want to reuse in the new version. For example, I really liked the folder structure I had: agent_workspaces/{agent_id}, and inside that folder there is a /bin folder and the git worktree folders the agents use to develop. They stay on that folder always. And what worked really well was to add their own /bin folder to their path - that way, they all ran "vcorp", but they would all be running their own vcorp comand, which is a wrapper that includes the agent _id when calling the main command. In the same line, we can override other tools like git or any other.

So my idea now is to, instead of providing a platform for them to communicate, I want to create a platform to GUIDE them. So instead of giving them freedom as before, I want to constrict them to only be able to do one thing at a time. No confusion for the agents, and I can control the workflow perfectly this way instead of relying on them to do things. They suck for that! They are good at developing for example, for very bad at executing a simple series of steps you ask them to perform - like always push after committing, or update the ticket once done developing, or having the lead developer to review any pr - I think he did that once and then just forgot about it.

My brilliant idea: the application will basically be a state machine that locks agents into very specific status where they can only perform a specific, well documented action.

Each role would have a sequence of jobs defined (create documentation, create tickets, review tickets, or "develop" (consume tickets and develop in a loop), for example. Only one job can be active at a time for a role. A job can only be activated if the previous job in the sequence was done. I would be activating the jobs manually.

A job can have a series of required outputs - tickets, or documents, for example. If the job has a required output, the job is considered done once the output is produced, and the next job can now be activated.

Each job would have a workflow defined. For example, for "develop", the workflow could be:

Picking ticket: Automatically run "vcorp start-next-ticket" (returns in the prompt the highest-priority ticket assigned to the agent, assigns ticket to agent, changes status to "in progress", and automatically checks out the git worktree branch on his folder, and changes workflow state to "coding")

Coding: Instruct agent to do the job as described in the ticket in your workspace. Add and perform unit and e2e tests. Commit your job when done. (my git wrapper intercepts, and pushes, and sets the status of the ticket as "needs review", and changes workflow state to "waiting for review")

Waiting for review: Agent stays idle, waiting for a review. If not given in 5 minutes, sends me a message (I was Human Director) before lol. 

At this point, the agent is waiting for a reviewer to review the ticket. The workflow of a reviewer could look like this:

Picking ticket: vcorp review-next-ticket (automatically). Checks out agents branch

Reviewing: Instruct agent to review if the  code changes fulfill the ticket description. Merge into main if approved, vcorp reject-ticket if rejected. Changes ticket's assigned agent status to either (1) Picking ticket or (4): Working back on rejected ticket.

Needs review determination: Instruct agent if ticket needs qa review. vcorp needs-review yes/no. That will change the state of the ticket to done, or Needs QA review.

Get it? There will be a QA role with the workflow of reviewing tickets too! So it becomes all a well oiled machinery where agents are locked into one thing only at a time, and I can get and see a clear state of how things are going (I had no idea before really with all the chattery).

Something VERY IMPORTANT to note, is that agent's commands will be restricted on each state of their workflow to ONLY what the can do. So for example when a reviewer agent is at step (2) of the workflow above, the only allowed commands will be vcorp reject-ticket, or vcorp approve-ticket (which merges into main).

Well, that was something. It took me A LONG time to write that! What do you think?