# Problem Solving Session: Common Color Rules for Website Theme Control

**Date:** 2026-04-22
**Problem Solver:** ufo-studio
**Problem Category:** Frontend styling system / design tokens

---

## 🎯 PROBLEM DEFINITION

### Initial Problem Statement

Tạo ra các rule common để điều chỉnh màu sắc chính của trang web một cách tập trung thay vì phải sửa rải rác ở nhiều component.

### Refined Problem Statement

Hệ UI hiện tại chỉ có một nhóm token màu rất thô trong `:root` gồm `--text-color`, `--background-color`, `--primary-color`, và `--secondary-color`, trong khi các component đang dùng các token này cho nhiều mục đích khác nhau như nền section, accent shape, border, overlay, text tương phản, và interactive states. Kết quả là khi muốn đổi màu chủ đạo của website, việc chỉnh màu trở nên thiếu kiểm soát, dễ gây lệch tương phản và làm hỏng tính nhất quán giữa các section. Bài toán cần giải là xây một bộ common color rules mang tính semantic để một thay đổi ở theme chính có thể lan đúng ngữ cảnh trên toàn site với rủi ro thấp.

### Problem Context

- Toàn bộ app hiện được render từ một trang React duy nhất với CSS global trong `src/App.css` và CSS Modules cho từng section.
- Màu hiện tại được định nghĩa tập trung nhưng quá ít tầng ngữ nghĩa, nên `--primary-color` đang đồng thời đóng vai trò accent, decorative background, và highlight.
- `--background-color` đang vừa là nền body vừa là màu chữ trên các vùng nhấn như `Hero` button và text overlay ở `Projects`.
- Nhiều module đang dùng trực tiếp `background-color` hoặc `color` theo token tổng quát, khiến việc đổi palette có nguy cơ phá contrast hoặc tạo cảm giác không đồng nhất.
- Đây là một refactor styling có rủi ro thấp nếu giới hạn ở việc chuẩn hóa rules trước, chưa đổi cấu trúc component.

### Success Criteria

- Có một bộ color rules semantic dùng chung ở global scope.
- Mỗi rule có vai trò rõ ràng: page background, surface background, accent, text mặc định, text trên accent, border, overlay, interactive states.
- Việc đổi màu chủ đạo của site chủ yếu diễn ra ở một nơi thay vì sửa rải rác nhiều file.
- Rules mới tương thích với cấu trúc CSS Modules hiện tại, không buộc phải rewrite component.
- Bộ rule đủ rõ để áp dần vào `Navbar`, `Hero`, `Projects`, `Director`, và các section khác theo từng bước nhỏ.

---

## 🔍 DIAGNOSIS AND ROOT CAUSE ANALYSIS

### Problem Boundaries (Is/Is Not)

**IS**
- Là vấn đề của hệ semantic color token trong global CSS.
- Xảy ra ở `src/App.css` và lan sang hầu hết CSS Modules qua các token gốc.
- Ảnh hưởng trực tiếp đến background, text contrast, decorative accents, borders, overlays, và hover states.
- Xuất hiện khi muốn đổi màu chủ đạo hoặc tinh chỉnh palette mà vẫn giữ UI ổn định.
- Là vấn đề maintainability lẫn consistency: cùng một token đang gánh nhiều vai trò UI khác nhau.

**IS NOT**
- Không phải vấn đề business logic của React components.
- Không phải vấn đề cần đổi toàn bộ visual direction hoặc rebrand từ đầu.
- Không chủ yếu do thiếu nhiều màu hơn; vấn đề chính là thiếu phân vai rõ ràng cho màu.
- Không bắt buộc phải rewrite từng component ngay để giải quyết.
- Không phải vấn đề animation, layout, hay typography dù các mảng đó có liên quan đến trải nghiệm tổng thể.

### Root Cause Analysis

**Phương pháp dùng:** Five Whys Root Cause + Systems Thinking

**Triệu chứng trực tiếp**
- Đổi `--primary-color` có thể làm hỏng cả decorative backgrounds, hover states, và accent surfaces cùng lúc.
- Đổi `--background-color` có thể vô tình ảnh hưởng cả nền trang lẫn text trên vùng accent.
- Cùng một ý nghĩa thị giác như "surface", "accent", hay "text on dark/accent" chưa có token riêng.

**Five Whys**
1. Vì sao đổi màu chủ đạo lại rủi ro?
   Vì một token đang được tái sử dụng cho nhiều vai trò UI khác nhau.
2. Vì sao một token bị dùng cho nhiều vai trò?
   Vì hệ token hiện tại chỉ mô tả màu theo tên chung (`primary`, `secondary`, `background`) thay vì mô tả theo chức năng.
3. Vì sao token không mô tả theo chức năng?
   Vì styling được bắt đầu từ mức theme đơn giản rồi mở rộng section-by-section mà không tạo semantic layer ở global scope.
4. Vì sao semantic layer không được thêm vào khi số lượng section tăng?
   Vì mỗi component tự giải quyết nhu cầu màu cục bộ bằng token có sẵn thay vì chuẩn hóa rule dùng chung.
5. Vì sao cách đó tiếp tục tồn tại?
   Vì codebase hiện chưa có design-token contract rõ ràng giữa global CSS và component CSS modules.

**Kết luận root cause**
- Nguyên nhân gốc không phải là palette hiện tại xấu hay quá ít màu.
- Nguyên nhân gốc là thiếu một lớp semantic color contract, khiến token theme bị dùng trực tiếp ở tầng component cho nhiều mục đích không tương thích.

### Contributing Factors

- Tên token hiện tại mang tính cảm tính hơn là chức năng.
- CSS Modules tách file tốt nhưng không có shared styling contract ngoài 4 biến gốc.
- Một số vùng cần contrast riêng như overlay, text trên accent, border nhẹ, hover surface nhưng không có token tương ứng.
- Các pseudo-element trang trí dùng `--primary-color` làm tăng độ phụ thuộc của toàn site vào một màu duy nhất.
- Việc chưa có state token cho hover/focus/active khiến interactive styling dựa vào đảo màu thủ công.

### System Dynamics

- Global tokens quá tổng quát dẫn đến component-level improvisation.
- Component-level improvisation làm tăng số nơi một token bị dùng sai vai trò.
- Càng nhiều section hoặc decorative treatment, chi phí đổi theme càng cao.
- Chi phí đổi theme cao khiến việc chuẩn hóa bị trì hoãn, và sự trì hoãn đó lại làm semantic drift nặng hơn.
- Một semantic layer tốt sẽ phá vòng lặp này bằng cách chặn component dùng trực tiếp raw theme colors cho mọi tình huống.

---

## 📊 ANALYSIS

### Force Field Analysis

**Driving Forces (Supporting Solution):**
- App hiện đã có global `:root`, nên có điểm vào tự nhiên để thêm semantic color rules mà không phải đổi kiến trúc.
- Hầu hết component đã dùng CSS variables thay vì hardcode hex trực tiếp, nên việc chuyển đổi sang token semantic có chi phí thấp.
- Nhu cầu đổi màu chủ đạo toàn site là chính đáng và lặp lại, nên đầu tư vào common rules có giá trị lâu dài.
- Bộ token semantic sẽ đồng thời cải thiện maintainability, consistency, và khả năng refactor từng phần.
- Cấu trúc CSS Modules hiện tại phù hợp với chiến lược "global token, local usage".

**Restraining Forces (Blocking Solution):**
- Nếu tạo quá nhiều token, team sẽ không biết khi nào dùng token nào.
- Một số component hiện dùng màu cho cả mục đích nội dung lẫn trang trí, nên việc remap cần có nguyên tắc rõ ràng.
- Chưa có theme switcher hay dark mode, nên hệ token cần đủ đơn giản để không vượt quá nhu cầu hiện tại.
- Các pseudo-elements trong `Projects`, `Hero`, `Director` khiến việc phân biệt giữa accent content và decorative accent cần cẩn thận.

### Constraint Identification

- Phải tương thích với cấu trúc hiện tại của `src/App.css` và CSS Modules.
- Không nên yêu cầu rewrite layout hoặc JSX chỉ để áp dụng color rules.
- Nên giữ số token ở mức nhỏ nhưng semantic rõ ràng.
- Token phải hỗ trợ ít nhất các nhóm ngữ cảnh sau: page, surface, accent, text, text-on-accent, border, overlay, interactive state.
- Tên token nên đủ trực quan để một người đọc CSS module biết dùng token nào mà không cần tra cứu quá nhiều.

### Key Insights

- Bộ rule tốt nhất cho repo này không phải raw palette scale kiểu `100/200/300`, mà là semantic tokens theo vai trò UI.
- Nên giữ `brand/accent` làm lớp theme gốc, rồi tách riêng token cho `surface`, `text`, `border`, và `interactive`.
- Cần tách rõ `accent background` với `decorative accent` nếu muốn đổi màu chủ đạo mà không phá toàn bộ khối trang trí.
- `text on accent` phải là token riêng, không nên tái dùng `background-color`.
- Nên có hai lớp:
  1. `foundation tokens` cho màu brand/base
  2. `semantic tokens` cho cách dùng trong UI

---

## 💡 SOLUTION GENERATION

### Methods Used

- Morphological Analysis
- Assumption Busting
- SCAMPER for Problems

### Generated Solutions

**Option A: Keep current tokens, just rename a few**
- Giữ cấu trúc gần như hiện tại và thêm 2-3 token mới như `--accent-text`, `--border-color`, `--overlay-color`.
- Ưu điểm: thay đổi ít.
- Nhược điểm: vẫn giữ gốc vấn đề là token nền tảng không semantic đủ rõ.

**Option B: Two-layer color system**
- Tạo `foundation tokens` cho màu brand/base và `semantic tokens` cho vai trò UI.
- Foundation tokens ví dụ:
  - `--color-ink`
  - `--color-paper`
  - `--color-brand`
  - `--color-surface`
  - `--color-overlay`
- Semantic tokens ví dụ:
  - `--page-bg`
  - `--surface-bg`
  - `--surface-muted`
  - `--accent-bg`
  - `--accent-decor`
  - `--text-primary`
  - `--text-muted`
  - `--text-on-accent`
  - `--border-subtle`
  - `--border-strong`
  - `--interactive-bg`
  - `--interactive-text`
  - `--interactive-hover-bg`
  - `--interactive-hover-text`
- Ưu điểm: rõ vai trò, scale tốt, áp dụng dần được.
- Nhược điểm: cần remap lại token usage ở các module.

**Option C: Component-scoped color contracts**
- Mỗi component có bộ token riêng như `--navbar-bg`, `--hero-accent`, `--projects-label-text`.
- Ưu điểm: rất linh hoạt.
- Nhược điểm: tạo ra quá nhiều token cục bộ, không giải quyết bài toán common rules toàn site.

**Option D: Semantic rules + usage policy**
- Dùng Option B nhưng đi kèm nguyên tắc dùng token:
  - chỉ foundation tokens mới được chứa raw hex
  - component CSS chỉ dùng semantic tokens
  - decorative shapes không dùng trực tiếp token text hoặc page background
  - text nằm trên accent/overlay phải luôn dùng token contrast riêng
- Ưu điểm: chặn semantic drift về lâu dài.
- Nhược điểm: cần thống nhất kỷ luật dùng token.

### Creative Alternatives

- Nếu muốn tối giản tối đa, có thể bắt đầu chỉ với 8 semantic tokens cốt lõi rồi mở rộng sau.
- Nếu muốn hỗ trợ nhiều theme sau này, semantic tokens có thể được gắn vào `data-theme` mà không cần đổi component CSS.
- Có thể thêm nhóm `--focus-ring` và `--selection-bg` sau, nhưng chưa cần ở vòng đầu.

---

## ⚖️ SOLUTION EVALUATION

### Evaluation Criteria

- **Effectiveness:** Có giải quyết được root cause là thiếu semantic color contract hay không.
- **Low-risk adoption:** Có áp dụng dần vào codebase hiện tại mà không cần rewrite lớn hay không.
- **Clarity:** Tên token có đủ rõ để dùng đúng ngữ cảnh mà không phải đoán hay không.
- **Scalability:** Có hỗ trợ thêm section mới hoặc đổi theme sau này mà không vỡ hệ thống hay không.
- **Token discipline:** Có giúp ngăn component dùng trực tiếp raw palette hay không.

### Solution Analysis

**Option A: Keep current tokens, add a few**
- Effectiveness: thấp đến trung bình
- Low-risk adoption: cao
- Clarity: thấp
- Scalability: thấp
- Token discipline: thấp
- Kết luận: chỉ vá triệu chứng, không đủ để giải quyết nguyên nhân gốc.

**Option B: Two-layer color system**
- Effectiveness: cao
- Low-risk adoption: cao
- Clarity: cao
- Scalability: cao
- Token discipline: trung bình
- Kết luận: rất phù hợp với repo này, nhưng nếu thiếu usage policy thì semantic drift có thể quay lại.

**Option C: Component-scoped color contracts**
- Effectiveness: thấp đến trung bình
- Low-risk adoption: trung bình
- Clarity: trung bình
- Scalability: thấp
- Token discipline: thấp
- Kết luận: đi ngược mục tiêu common rules toàn site.

**Option D: Two-layer system + usage policy**
- Effectiveness: rất cao
- Low-risk adoption: cao
- Clarity: cao
- Scalability: cao
- Token discipline: rất cao
- Kết luận: là phương án cân bằng tốt nhất giữa thực dụng ngắn hạn và ổn định dài hạn.

### Recommended Solution

Áp dụng **Option D** với một bộ token tối thiểu gồm 2 lớp:

**Foundation tokens**
- `--color-ink`
- `--color-paper`
- `--color-brand`
- `--color-surface`
- `--color-overlay`

**Semantic tokens**
- `--page-bg`
- `--surface-bg`
- `--accent-bg`
- `--accent-decor`
- `--text-primary`
- `--text-muted`
- `--text-on-accent`
- `--border-subtle`
- `--border-strong`
- `--overlay-bg`
- `--interactive-bg`
- `--interactive-text`
- `--interactive-hover-bg`
- `--interactive-hover-text`

### Rationale

- Bộ này đủ nhỏ để không gây quá tải khi áp dụng.
- Nó giải quyết trực tiếp root cause: tách raw palette khỏi UI meaning.
- Nó cho phép đổi màu chủ đạo ở một nơi nhưng vẫn giữ contrast theo ngữ cảnh.
- Nó phù hợp với cấu trúc CSS Modules hiện tại và không buộc phải đổi JSX.
- Nó tạo nền tảng tốt cho các bước refactor tiếp theo như chuẩn hóa hover states, borders, surfaces, và section accents.

---

## 🚀 IMPLEMENTATION PLAN

### Implementation Approach

Áp dụng theo chiến lược **phased rollout** với phạm vi nhỏ:

1. Cập nhật `src/App.css` để thêm foundation tokens và semantic tokens.
2. Giữ tương thích tạm thời bằng cách remap token cũ sang token mới nếu cần trong giai đoạn chuyển tiếp.
3. Refactor lần lượt từng CSS module để bỏ phụ thuộc trực tiếp vào `--text-color`, `--background-color`, `--primary-color`, `--secondary-color`.
4. Ưu tiên các component có tác động lớn tới nhận diện màu và usability trước: `Navbar`, `Hero`, `Projects`, `Director`.
5. Sau khi toàn bộ component chính đã chuyển sang semantic tokens, xem xét bỏ hẳn token cũ.

### Action Steps

1. Trong `src/App.css`, khai báo bộ foundation tokens:
   - `--color-ink`
   - `--color-paper`
   - `--color-brand`
   - `--color-surface`
   - `--color-overlay`
2. Trong `src/App.css`, khai báo bộ semantic tokens:
   - `--page-bg`
   - `--surface-bg`
   - `--accent-bg`
   - `--accent-decor`
   - `--text-primary`
   - `--text-muted`
   - `--text-on-accent`
   - `--border-subtle`
   - `--border-strong`
   - `--overlay-bg`
   - `--interactive-bg`
   - `--interactive-text`
   - `--interactive-hover-bg`
   - `--interactive-hover-text`
3. Chuyển `body` sang dùng:
   - `background-color: var(--page-bg)`
   - `color: var(--text-primary)`
4. Mapping cho `Navbar.module.css`:
   - nền navbar dùng `--surface-bg`
   - text và border dùng `--text-primary` hoặc `--border-strong`
   - overlay mobile dùng `--overlay-bg`
   - icon hover dùng `--interactive-hover-bg` và `--interactive-hover-text`
5. Mapping cho `Hero.module.css`:
   - text mặc định dùng `--text-primary`
   - CTA text dùng `--text-on-accent`
   - shadow/accent panel dùng `--accent-decor`
6. Mapping cho `Projects.module.css`:
   - line divider và title rail dùng `--border-strong`
   - decorative blocks/circles dùng `--accent-decor`
   - text overlay trên image dùng `--text-on-accent`
   - button/text action dùng `--interactive-text`
7. Mapping cho `Director.module.css`:
   - arrow line dùng `--border-strong`
   - decorative shapes dùng `--accent-decor`
   - nội dung chữ dùng `--text-primary`
8. Mapping cho `About.module.css`:
   - arrow rail dùng `--border-strong`
   - body text dùng `--text-primary`
9. Nếu cần giai đoạn chuyển tiếp an toàn, thêm alias:
   - `--text-color: var(--text-primary)`
   - `--background-color: var(--page-bg)`
   - `--primary-color: var(--accent-bg)`
   - `--secondary-color: var(--surface-bg)`
10. Sau khi hoàn tất remap ở các module chính, loại bỏ usage trực tiếp của token cũ bằng kiểm tra `rg`.

### Timeline and Milestones

- Milestone 1: Token layer mới tồn tại trong `src/App.css`
- Milestone 2: `Navbar` và `Hero` đã dùng semantic tokens
- Milestone 3: `Projects`, `Director`, `About` đã dùng semantic tokens
- Milestone 4: Token cũ chỉ còn alias hoặc được loại bỏ hoàn toàn

### Resource Requirements

- Không cần dependency mới
- Chỉ cần chỉnh CSS global và CSS modules hiện có
- Cần một lượt rà soát contrast và hover states sau khi remap

### Responsible Parties

- Một người phụ trách refactor CSS có thể thực hiện toàn bộ thay đổi
- Nếu làm theo nhiều PR nhỏ, nên giữ một người review consistency của token naming và usage

---

## 📈 MONITORING AND VALIDATION

### Success Metrics

- Tất cả màu gốc của theme được khai báo tập trung trong `foundation tokens`.
- Các CSS Modules chính không còn phụ thuộc trực tiếp vào `--text-color`, `--background-color`, `--primary-color`, `--secondary-color` sau giai đoạn chuyển tiếp.
- Các vùng chính của UI giữ được contrast đọc tốt sau khi remap: body text, navbar, CTA, overlay text, buttons, decorative sections.
- Việc đổi màu chủ đạo chỉ cần chỉnh nhóm `foundation tokens` mà không phải sửa nhiều module riêng lẻ.
- Không xuất hiện hồi quy thị giác lớn giữa desktop và mobile sau khi chuyển token.

### Validation Plan

1. Kiểm tra bằng tìm kiếm toàn repo:
   - xác định nơi còn dùng token cũ
   - xác định nơi còn hardcode màu mới phát sinh
2. Kiểm tra trực quan các vùng chính:
   - Navbar desktop/mobile
   - Hero title, description, CTA
   - Projects rails, image overlay text, decorative blocks
   - Director image decorations, title, body text
   - About paragraph và arrow rail
3. Kiểm tra các trạng thái tương tác:
   - icon hover
   - button/link hover
   - mobile menu overlay
4. Kiểm tra tính ổn định khi đổi thử `--color-brand` và `--color-surface`:
   - các accent đổi đồng bộ
   - text contrast không bị gãy
   - page/surface hierarchy vẫn đọc được
5. Kiểm tra responsive ở các breakpoint hiện có:
   - desktop
   - tablet
   - mobile

### Risk Mitigation

- Giữ alias token cũ trong một giai đoạn ngắn để tránh vỡ UI hàng loạt.
- Refactor theo từng module thay vì đổi toàn bộ cùng lúc.
- Không trộn raw hex trực tiếp vào CSS module mới.
- Với mọi text nằm trên accent hoặc image overlay, buộc dùng token contrast riêng thay vì kế thừa.
- Sau mỗi lượt remap module, kiểm tra lại hover state và border visibility vì đây là chỗ dễ mất contrast nhất.

### Adjustment Triggers

- Nếu một component cần nhiều ngoại lệ màu hơn dự kiến, xem lại semantic token set trước khi thêm token cục bộ mới.
- Nếu `accent-bg` và `accent-decor` luôn giống nhau trong nhiều vòng chỉnh, có thể gộp chúng lại để giảm độ phức tạp.
- Nếu text vẫn khó đọc trên overlay hoặc accent surface, tách thêm token như `--text-on-overlay`.
- Nếu interactive states bắt đầu đa dạng hơn, mở rộng thêm token cho `focus`, `active`, `disabled`.

---

## 📝 LESSONS LEARNED

### Key Learnings

- Bài toán màu của repo này thực chất là bài toán semantics, không phải bài toán chọn palette.
- Chỉ đổi tên hoặc thêm vài token mới không đủ giải quyết gốc rễ nếu component vẫn dùng trực tiếp raw theme colors.
- Một lớp semantic token nhỏ nhưng rõ vai trò có giá trị hơn một hệ token lớn nhưng mơ hồ.
- Với codebase dùng CSS Modules, mô hình hiệu quả nhất là `global token contract + local semantic usage`.
- Việc chuẩn hóa màu là một bước refactor hạ tầng UI tốt vì nó giảm rủi ro cho các đợt chỉnh responsive và visual cleanup sau đó.

### What Worked

- Phân tách vấn đề theo các bước `problem boundaries -> root cause -> solution options -> implementation plan` giúp tránh nhảy thẳng vào sửa CSS cảm tính.
- Đối chiếu trực tiếp với `src/App.css` và các module hiện tại giúp bộ token đề xuất bám sát codebase thay vì thành lý thuyết chung.
- Chốt theo hướng `two-layer system + usage policy` giữ được cân bằng giữa tính thực dụng và khả năng mở rộng.

### What to Avoid

- Không thêm token cục bộ cho từng component trước khi kiểm tra semantic token chung có đủ hay chưa.
- Không dùng lại cùng một token cho cả text, accent background, và decorative shapes.
- Không hardcode màu mới trong CSS module khi đã bắt đầu xây token contract.
- Không mở rộng token system quá nhanh sang các concern chưa cần như dark mode hoặc nhiều theme phức tạp nếu codebase chưa cần.

---

_Generated using BMAD Creative Intelligence Suite - Problem Solving Workflow_
