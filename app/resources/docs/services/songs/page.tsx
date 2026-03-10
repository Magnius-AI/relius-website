export default function SongLibraryPage() {
  return (
    <div className="prose prose-slate max-w-4xl">
      <h1>Song Library</h1>

      <blockquote>
        <p><strong>Quick Summary</strong>: Organize your worship songs with arrangements, keys, and lyrics—track usage, integrate CCLI reporting, and maintain variety across services.</p>
      </blockquote>

      <h2>Overview</h2>
      <p>
        Every church has a worship catalog—the collection of songs your congregation knows and loves. Some churches have 50 songs in rotation; others have 500. Whether your style is contemporary, traditional, blended, or wildly eclectic, managing this catalog effectively makes the difference between worship that feels fresh and engaging versus stale and repetitive. The Relius song library turns your collection of chord charts, lyric sheets, and half-remembered songs into an organized, searchable system that serves your worship planning needs.
      </p>
      <p>
        A song library is more than a digital filing cabinet. It's a tool for maintaining worship variety ("We haven't sung that in 8 weeks—perfect!"), honoring copyright compliance (automatic CCLI logging), and equipping your team (instant access to chord charts and arrangements). It remembers which key you prefer for each song, which arrangement works best in your space, and which songs resonate most with your congregation. Planning worship becomes faster when you can search by theme, tempo, or recent usage instead of flipping through paper binders.
      </p>
      <p>
        Whether you're a worship leader building next month's set lists, a pastor finding songs that match sermon themes, or a church administrator filing CCLI reports, the song library centralizes everything about your worship music. Add songs once, use them forever, and let the system handle the details so you can focus on leading people into God's presence.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Song</strong>: A worship song or hymn in your library with lyrics, metadata, and arrangements</li>
        <li><strong>Arrangement</strong>: A specific version of a song (Original, Acoustic, Studio Version, Hymn Version, etc.)</li>
        <li><strong>Key</strong>: The musical key for an arrangement (like G, D, or Bb)</li>
        <li><strong>Tempo</strong>: Speed of the song in BPM (beats per minute) or description (Slow, Medium, Upbeat)</li>
        <li><strong>CCLI Song Number</strong>: The unique identifier for copyright reporting to CCLI</li>
        <li><strong>Usage Tracking</strong>: Recording when and how often each song is used in services</li>
        <li><strong>Song Tags/Categories</strong>: Organizational labels like "Worship," "Communion," "Easter," "Youth Friendly"</li>
        <li><strong>Chord Chart</strong>: Musical notation showing chords and lyrics for musicians</li>
      </ul>

      <h2>Getting Started</h2>

      <h3>Step 1: Navigate to Song Library</h3>
      <p>
        From your dashboard, click <strong>Services → Song Library</strong>. You'll see your current song collection (if any) with search and filter options. Click <strong>Add Song</strong> to begin building your library.
      </p>

      <h3>Step 2: Enter Song Details</h3>
      <p>
        Fill in the basics: song title, artist/author, CCLI song number (if applicable), copyright year, and publisher. Add lyrics by pasting them into the text field or uploading a lyric sheet. Tag the song with categories like "Contemporary Worship," "Communion," "Easter," or "Hymns" for easy filtering later.
      </p>

      <h3>Step 3: Add Arrangements</h3>
      <p>
        Most songs have multiple arrangements. Maybe you play "Amazing Grace" in both traditional hymn format (key of G) and a contemporary version (key of D). Create separate arrangements for each version, specifying the key, tempo, and any special notes. Upload chord charts, lead sheets, or audio recordings for each arrangement.
      </p>

      <h3>Step 4: Set Default Preferences</h3>
      <p>
        Mark your preferred arrangement and key for each song. When you add the song to a service plan, Relius automatically suggests your default preferences. You can always override for specific services, but defaults save time.
      </p>

      <h3>Step 5: Import Existing Library</h3>
      <p>
        If you have an existing song collection in a spreadsheet or another system, use the bulk import feature. Map your columns (Title, Artist, CCLI Number, etc.) to Relius fields and upload. Hundreds of songs can be added in minutes.
      </p>

      <h2>Features</h2>

      <h3>Adding Songs to the Library</h3>
      <p>
        Each song entry includes:
      </p>
      <ul>
        <li><strong>Title</strong>: Song name (like "How Great Is Our God")</li>
        <li><strong>Artist/Author</strong>: Original artist or songwriter (like "Chris Tomlin")</li>
        <li><strong>CCLI Song #</strong>: For copyright tracking (like "4348399")</li>
        <li><strong>Themes/Tags</strong>: Categories for filtering (Praise, Worship, Advent, Youth, etc.)</li>
        <li><strong>Lyrics</strong>: Full text of all verses, choruses, bridges</li>
        <li><strong>Duration</strong>: Typical length in minutes</li>
        <li><strong>Notes</strong>: Special instructions, history, or context</li>
      </ul>
      <p>
        <em>Example: Add "10,000 Reasons (Bless the Lord)" by Matt Redman, CCLI #6016351. Tag it with "Worship," "Contemporary," "All Ages." Paste the lyrics, note it's typically 4-5 minutes, and add a comment: "Works great as opening song or response to sermon."</em>
      </p>

      <h3>Song Arrangements and Keys</h3>
      <p>
        Most worship songs can be played in various arrangements and keys. A single song might have:
      </p>
      <ul>
        <li><strong>Original Recording</strong> (Key of G, full band, upbeat)</li>
        <li><strong>Acoustic Version</strong> (Key of D, guitar and vocals, slower)</li>
        <li><strong>Piano Arrangement</strong> (Key of C, piano solo, contemplative)</li>
        <li><strong>Congregational Hymn</strong> (Key of Bb, suitable for group singing)</li>
      </ul>
      <p>
        For each arrangement, specify the key (important for musicians!), tempo, instrumentation, and any special notes. Upload arrangement-specific files like chord charts, sheet music, or backing tracks.
      </p>
      <p>
        When planning a service, you can choose which arrangement fits the moment. Want an intimate communion song? Use the acoustic arrangement. Need high energy for the opener? Go with the full band version.
      </p>

      <h3>CCLI Integration and Reporting</h3>
      <p>
        If your church has a CCLI license (and you should!), Relius makes reporting effortless:
      </p>
      <ol>
        <li>Enter the CCLI song number when adding songs to your library</li>
        <li>When you add a song to a service plan, Relius logs the usage automatically</li>
        <li>At reporting time, generate a CCLI report showing all songs used in the reporting period</li>
        <li>Export the report and submit it to CCLI—takes 2 minutes instead of 2 hours</li>
      </ol>
      <p>
        No more tracking usage on paper or hoping you remember every song from the last quarter. Compliance happens automatically as you plan services.
      </p>

      <h3>Tracking Song Usage</h3>
      <p>
        Every time a song appears in a service plan, Relius records the usage. Over time, you build a complete picture of your worship patterns:
      </p>
      <ul>
        <li>Which songs are used most frequently</li>
        <li>Which songs haven't been used in months (or years)</li>
        <li>How often you repeat songs (are you singing "Cornerstone" every other week?)</li>
        <li>Seasonal patterns (certain songs used mainly at Christmas or Easter)</li>
        <li>Which arrangements are preferred</li>
      </ul>
      <p>
        Use this data to maintain variety. If "Good Good Father" has been used 6 times in the last 8 weeks, maybe rotate it out for a while. If "It Is Well" hasn't been sung in a year and fits next week's theme, bring it back.
      </p>

      <h3>Song Usage Analytics</h3>
      <p>
        Generate reports showing:
      </p>
      <ul>
        <li><strong>Most-used songs</strong>: Your congregation's top 20 songs</li>
        <li><strong>Dormant songs</strong>: Songs in your library that haven't been used in 6+ months</li>
        <li><strong>Rotation frequency</strong>: Average days between uses for each song</li>
        <li><strong>Theme analysis</strong>: Usage patterns by category (Praise vs. Worship vs. Communion)</li>
        <li><strong>Tempo mix</strong>: Are you singing mostly fast songs or slow songs?</li>
        <li><strong>New song adoption</strong>: How quickly new songs become regulars</li>
      </ul>
      <p>
        These insights help you make intentional choices about song selection. Maybe you've been leaning too heavily on upbeat songs and need more contemplative pieces. Maybe it's time to retire songs that never gained traction and make room for new ones.
      </p>

      <h3>Searching and Filtering</h3>
      <p>
        Finding the right song for the moment is easy with robust search and filters:
      </p>
      <ul>
        <li>Search by title, artist, lyrics, or CCLI number</li>
        <li>Filter by tags/categories (show me all "Easter" songs)</li>
        <li>Filter by tempo (upbeat songs for an energetic opener)</li>
        <li>Filter by key (our lead vocalist prefers songs in D or G)</li>
        <li>Filter by recency (songs not used in the last 2 months)</li>
        <li>Filter by popularity (most-used songs in the last year)</li>
      </ul>
      <p>
        <em>Example: You're planning a communion service and need a slow, contemplative song in the key of C that you haven't used recently. Filter: Category = "Communion," Tempo = "Slow," Key = "C," Last used = "More than 6 weeks ago." Relius shows 8 songs that match. Perfect.</em>
      </p>

      <details>
        <summary>Advanced Options</summary>
        
        <h4>Chord Charts and Lead Sheets</h4>
        <p>
          Upload PDFs, images, or ChordPro files for each arrangement. Musicians can access chord charts directly from the service plan—no more printing and distributing paper copies. Tag charts with instrument-specific notes (guitar capo position, bass tab, drum chart).
        </p>

        <h4>Lyric Projection Integration</h4>
        <p>
          Export song lyrics directly to ProPresenter, PowerPoint, or other presentation software. Some integrations allow automatic playlist creation—add songs to your service plan, and the presentation slides build themselves.
        </p>

        <h4>Audio and Video References</h4>
        <p>
          Attach reference recordings (YouTube links, Spotify embeds, or uploaded audio files) so team members can hear the song before rehearsal. Especially helpful when introducing new songs.
        </p>

        <h4>Song Themes and Scripture Tags</h4>
        <p>
          Tag songs with themes (grace, redemption, communion, mission) and scripture references (Psalm 23, John 3:16). When planning a sermon series on grace, search for songs tagged with "grace" or relevant scripture passages.
        </p>

        <h4>Team Member Song Preferences</h4>
        <p>
          Track which musicians prefer or avoid certain songs. If your drummer loves upbeat songs but struggles with 6/8 time signatures, note that in the song or team member profile. Use these preferences when building balanced set lists.
        </p>

        <h4>Multi-Language Support</h4>
        <p>
          Add translations of song lyrics for multilingual congregations. Store Spanish, Korean, or Mandarin versions alongside English, and select the appropriate language when planning services.
        </p>

        <h4>Setlist Builder</h4>
        <p>
          Create song sets (groups of songs that flow well together) and save them as templates. Maybe your "High Energy Praise Set" includes 3 specific songs that work well in sequence. Apply the set to a service plan with one click.
        </p>

        <h4>Song Feedback and Ratings</h4>
        <p>
          Allow team members to rate songs or leave feedback after use. "Congregation loved this!" or "Too high for our vocalists, transpose down." Collective wisdom improves future planning.
        </p>

        <h4>Song Retirement and Archives</h4>
        <p>
          Mark songs as "archived" when they're no longer in regular rotation but you want to keep them for reference. Archived songs don't appear in normal searches but remain available if you specifically look for them.
        </p>

        <h4>Integration with Music Services</h4>
        <p>
          Connect with Spotify, Apple Music, or YouTube to automatically pull metadata, album art, and reference recordings when adding songs. Reduces data entry and ensures consistency.
        </p>
      </details>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Enter CCLI numbers consistently</strong> – Makes reporting automatic and ensures legal compliance</li>
        <li><strong>Use clear, consistent naming</strong> – "Amazing Grace (Traditional)" vs. "Amazing Grace (Chris Tomlin)" avoids confusion</li>
        <li><strong>Tag songs thoughtfully</strong> – Good tags make searching fast; random tags create clutter</li>
        <li><strong>Upload chord charts for every arrangement</strong> – Musicians need reference materials; make them accessible</li>
        <li><strong>Review usage analytics quarterly</strong> – Intentionally rotate songs to maintain variety</li>
        <li><strong>Introduce new songs gradually</strong> – 1-2 new songs per month; more overwhelms the congregation</li>
        <li><strong>Retire songs that don't stick</strong> – If a song doesn't resonate after 3-4 uses, move on</li>
        <li><strong>Document arrangement preferences</strong> – Save your team from re-learning keys every time</li>
        <li><strong>Keep lyrics updated</strong> – If you change wording or structure, update the library</li>
        <li><strong>Clean up the library annually</strong> – Archive unused songs, update metadata, refresh tags</li>
      </ul>

      <h2>Common Questions</h2>
      
      <p><strong>Q: How many songs should our library have?</strong></p>
      <p>A: Most churches have 50-200 songs in active rotation. Smaller churches might have 30-50; larger churches with multiple services and styles might have 300+. Quality matters more than quantity—better to know 50 songs well than 200 songs poorly.</p>

      <p><strong>Q: Do we need CCLI numbers for traditional hymns?</strong></p>
      <p>A: Hymns published before 1925 are typically public domain and don't require CCLI reporting. However, modern arrangements or translations of old hymns may be copyrighted. When in doubt, include the CCLI number if you have it.</p>

      <p><strong>Q: How often should we introduce new songs?</strong></p>
      <p>A: Most worship leaders recommend 1-2 new songs per month. This gives the congregation time to learn each song before adding another. Introduce new songs 2-3 weeks in a row so people have multiple chances to sing them.</p>

      <p><strong>Q: What if we sing the same songs at multiple services?</strong></p>
      <p>A: Each service with the same song should be logged separately for CCLI reporting (one song, two services = two uses). Relius handles this automatically when you add the same song to multiple service plans.</p>

      <p><strong>Q: Can we share our song library with other churches?</strong></p>
      <p>A: You can export your library data (titles, artists, CCLI numbers) to share with partner churches. However, chord charts and arrangements may be subject to copyright restrictions—share only with permission or if you created them.</p>

      <p><strong>Q: How do we handle songs in different keys for different singers?</strong></p>
      <p>A: Create multiple arrangements for the same song, each in a different key. Label them clearly (like "Amazing Grace - Key of G" vs. "Amazing Grace - Key of D"). When planning services, select the arrangement that matches your vocalist's range.</p>

      <h2>Real-World Scenarios</h2>

      <h3>Scenario: Preventing Song Fatigue</h3>
      <p>
        Crossroads Church realizes they've been singing "Reckless Love" almost every other week for 3 months. The usage analytics show it's their most-used song by far. The worship team decides to rest it for 8 weeks and intentionally brings back older favorites like "Here I Am to Worship" and "Blessed Be Your Name" that haven't been used in months. Congregation members comment positively on the variety.
      </p>

      <h3>Scenario: Theme-Based Planning</h3>
      <p>
        Pastor Mike is planning a sermon series on the Psalms. He searches the song library for songs tagged with "Psalms" and finds 15 songs tied to specific Psalm texts. He builds a song rotation matching each week's sermon text—when preaching Psalm 46, they sing "Lord of Hosts." The music reinforces the teaching naturally.
      </p>

      <h3>Scenario: Effortless CCLI Reporting</h3>
      <p>
        It's CCLI reporting time. Rebecca (church administrator) logs into Relius, goes to Song Library → Reports, selects "CCLI Usage Report" for the last quarter, and clicks export. The system generates a CSV file with every song used, service dates, and CCLI numbers. She uploads it to the CCLI website in under 5 minutes. Previously, this task took 2+ hours of manual tracking.
      </p>

      <h3>Scenario: Introducing a New Song</h3>
      <p>
        The worship team wants to introduce "Goodness of God." They add it to the library with chord charts in the key of D (best for their vocalists), tag it "Worship" and "Thanksgiving," and attach a YouTube reference recording. They schedule it for 3 consecutive Sundays with the same arrangement, giving the congregation time to learn it. By week 4, people are singing along confidently. It becomes a regular part of their rotation.
      </p>

      <h2>Related Topics</h2>
      <ul>
        <li><a href="/resources/docs/services/plans">Service Plans</a> – Add songs from your library to service plans</li>
        <li><a href="/resources/docs/services/teams">Teams</a> – Assign musicians to songs in your library</li>
        <li><a href="/resources/docs/admin/settings">Settings</a> – Connect CCLI and music streaming services</li>
        <li><a href="/resources/docs/ai/sermon-planner">AI Sermon Planner</a> – Get song suggestions based on sermon themes</li>
      </ul>
    </div>
  );
}
